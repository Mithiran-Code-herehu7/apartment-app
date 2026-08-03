import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../../infrastructure/database/prisma/prisma.service';
import { CreateListingDto } from './dto/create-listing.dto';
import { UpdateListingDto } from './dto/update-listing.dto';

@Injectable()
export class ListingsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(providerId: string, apartmentId: string, createListingDto: CreateListingDto) {
    return this.prisma.listings.create({
      data: {
        provider_id: providerId,
        apartment_id: apartmentId,
        category_id: createListingDto.categoryId,
        title: createListingDto.title,
        slug: createListingDto.slug,
        description: createListingDto.description,
        mode: createListingDto.mode,
        location_details: createListingDto.locationDetails,
        age_group: createListingDto.ageGroup,
        max_capacity: createListingDto.maxCapacity ?? 1,
        prerequisites: createListingDto.prerequisites,
        tags: createListingDto.tags || [],
        status: 'approved', // Auto-approved for demo
        pricing_plans: {
          create: [{
            name: 'Standard Plan',
            description: 'Default standard pricing',
            price_amount: createListingDto.price ?? 500, // Default 500 INR
            currency: 'INR',
            pricing_type: 'one_time'
          }]
        },
        availability_slots: {
          create: [{
            day_of_week: 'monday',
            start_time: new Date('1970-01-01T10:00:00Z'),
            end_time: new Date('1970-01-01T11:00:00Z'),
            max_capacity: createListingDto.maxCapacity ?? 1,
            slot_type: 'recurring'
          }]
        }
      },
    });
  }

  async findAll(apartmentId?: string, categoryId?: string) {
    return this.prisma.listings.findMany({
      where: {
        deleted_at: null,
        status: 'approved',
        ...(apartmentId && { apartment_id: apartmentId }),
        ...(categoryId && { category_id: categoryId }),
      },
      include: {
        users: { select: { id: true, user_profiles: { select: { display_name: true, avatar_url: true } } } },
        categories: { select: { id: true, name: true, slug: true } },
        pricing_plans: { where: { is_active: true } },
      },
      orderBy: { created_at: 'desc' },
    });
  }

  async findByProvider(providerId: string) {
    return this.prisma.listings.findMany({
      where: {
        provider_id: providerId,
        deleted_at: null,
      },
      include: {
        categories: { select: { id: true, name: true, slug: true } },
        pricing_plans: { where: { is_active: true } },
      },
      orderBy: { created_at: 'desc' },
    });
  }

  async findOne(id: string) {
    const listing = await this.prisma.listings.findUnique({
      where: { id, deleted_at: null },
      include: {
        users: { select: { id: true, user_profiles: true } },
        categories: true,
        listing_media: { orderBy: { display_order: 'asc' } },
        pricing_plans: { where: { is_active: true } },
        availability_slots: { where: { is_active: true } },
      },
    });

    if (!listing) {
      throw new NotFoundException(`Listing with ID ${id} not found`);
    }

    return listing;
  }

  async update(id: string, providerId: string, updateListingDto: UpdateListingDto) {
    // 1. Verify ownership
    const listing = await this.findOne(id);
    if (listing.provider_id !== providerId) {
      throw new ForbiddenException('You can only update your own listings');
    }

    // 2. Update
    const updated = await this.prisma.listings.update({
      where: { id },
      data: {
        category_id: updateListingDto.categoryId,
        title: updateListingDto.title,
        slug: updateListingDto.slug,
        description: updateListingDto.description,
        mode: updateListingDto.mode,
        location_details: updateListingDto.locationDetails,
        age_group: updateListingDto.ageGroup,
        max_capacity: updateListingDto.maxCapacity,
        prerequisites: updateListingDto.prerequisites,
        tags: updateListingDto.tags,
      },
    });

    if (updateListingDto.price !== undefined) {
      const existingPlan = await this.prisma.pricing_plans.findFirst({
        where: { listing_id: id, is_active: true }
      });
      if (existingPlan) {
        await this.prisma.pricing_plans.update({
          where: { id: existingPlan.id },
          data: { price_amount: updateListingDto.price }
        });
      }
    }

    return updated;
  }
}
