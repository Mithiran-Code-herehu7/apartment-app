import { Injectable, NotFoundException, BadRequestException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../../infrastructure/database/prisma/prisma.service';
import { CreateDisputeDto } from './dto/create-dispute.dto';

@Injectable()
export class DisputesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(reporterId: string, createDisputeDto: CreateDisputeDto) {
    // 1. Verify booking exists
    const booking = await this.prisma.bookings.findUnique({
      where: { id: createDisputeDto.bookingId },
    });

    if (!booking) {
      throw new NotFoundException('Booking not found');
    }

    // 2. Verify reporter is part of the booking
    if (booking.learner_id !== reporterId && booking.provider_id !== reporterId) {
      throw new ForbiddenException('You can only dispute bookings you are a part of');
    }

    // 3. Ensure no active dispute exists
    const existingDispute = await this.prisma.disputes.findFirst({
      where: { booking_id: booking.id, status: { in: ['open', 'under_review'] } },
    });

    if (existingDispute) {
      throw new BadRequestException('An active dispute already exists for this booking');
    }

    // 4. Create dispute
    const reportedId = booking.learner_id === reporterId ? booking.provider_id : booking.learner_id;

    return this.prisma.disputes.create({
      data: {
        booking_id: booking.id,
        filed_by: reporterId,
        against_user_id: reportedId,
        subject: 'Booking Dispute',
        description: createDisputeDto.reason,
        apartment_id: (await this.prisma.users.findUnique({where: {id: reporterId}}))!.apartment_id,
        evidence_urls: createDisputeDto.evidenceUrl ? [createDisputeDto.evidenceUrl] : [],
        status: 'open',
      },
    });
  }

  async findMine(userId: string) {
    return this.prisma.disputes.findMany({
      where: {
        OR: [
          { filed_by: userId },
          { against_user_id: userId },
        ],
      },
      orderBy: { created_at: 'desc' },
    });
  }
}
