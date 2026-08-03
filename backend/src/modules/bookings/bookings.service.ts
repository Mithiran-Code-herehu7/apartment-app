import { Injectable, NotFoundException, BadRequestException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../../infrastructure/database/prisma/prisma.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingStatusDto } from './dto/update-booking-status.dto';

@Injectable()
export class BookingsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(learnerId: string, createBookingDto: CreateBookingDto) {
    // 1. Fetch listing to get provider ID
    const listing = await this.prisma.listings.findUnique({
      where: { id: createBookingDto.listingId },
    });

    if (!listing) {
      throw new NotFoundException('Listing not found');
    }

    if (listing.provider_id === learnerId) {
      throw new BadRequestException('You cannot book your own listing');
    }

    let finalSlotId = createBookingDto.slotId;
    let finalPricingPlanId = createBookingDto.pricingPlanId;

    if (finalSlotId === '00000000-0000-0000-0000-000000000000') {
      const fallbackSlot = await this.prisma.availability_slots.create({
        data: {
          listing_id: createBookingDto.listingId,
          slot_type: 'one_time',
          is_active: true,
        }
      });
      finalSlotId = fallbackSlot.id;
    }

    if (finalPricingPlanId === '00000000-0000-0000-0000-000000000000') {
      const fallbackPlan = await this.prisma.pricing_plans.create({
        data: {
          listing_id: createBookingDto.listingId,
          name: 'Standard Plan',
          pricing_type: 'one_time',
          price_amount: 500,
        }
      });
      finalPricingPlanId = fallbackPlan.id;
    }

    return this.prisma.bookings.create({
      data: {
        learner_id: learnerId,
        provider_id: listing.provider_id,
        listing_id: createBookingDto.listingId,
        slot_id: finalSlotId,
        pricing_plan_id: finalPricingPlanId,
        session_start: new Date(createBookingDto.sessionStart),
        session_end: new Date(createBookingDto.sessionEnd),
        learner_notes: createBookingDto.learnerNotes,
        status: 'pending',
      },
    });
  }

  async findByLearner(learnerId: string) {
    return this.prisma.bookings.findMany({
      where: { learner_id: learnerId, deleted_at: null },
      include: {
        listings: { select: { title: true, id: true } },
        users_bookings_provider_idTousers: { select: { user_profiles: { select: { display_name: true } } } },
      },
      orderBy: { session_start: 'desc' },
    });
  }

  async findByProvider(providerId: string) {
    return this.prisma.bookings.findMany({
      where: { provider_id: providerId, deleted_at: null },
      include: {
        listings: { select: { title: true, id: true } },
        users_bookings_learner_idTousers: { select: { user_profiles: { select: { display_name: true } } } },
      },
      orderBy: { session_start: 'asc' },
    });
  }

  async updateStatus(bookingId: string, userId: string, updateDto: UpdateBookingStatusDto) {
    const booking = await this.prisma.bookings.findUnique({
      where: { id: bookingId },
    });

    if (!booking) {
      throw new NotFoundException('Booking not found');
    }

    // Verify ownership (either learner or provider can cancel, but only provider can confirm)
    if (booking.learner_id !== userId && booking.provider_id !== userId) {
      throw new ForbiddenException('You do not have access to this booking');
    }

    if (updateDto.status === 'confirmed' && booking.provider_id !== userId) {
      throw new ForbiddenException('Only the provider can confirm a booking');
    }

    return this.prisma.bookings.update({
      where: { id: bookingId },
      data: {
        status: updateDto.status,
        ...(updateDto.status === 'cancelled' && {
          cancelled_at: new Date(),
          cancellation_party: booking.learner_id === userId ? 'learner' : 'provider',
          cancellation_reason: updateDto.reason,
        }),
      },
    });
  }
}
