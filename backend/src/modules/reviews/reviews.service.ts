import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../infrastructure/database/prisma/prisma.service';
import { CreateReviewDto } from './dto/create-review.dto';

@Injectable()
export class ReviewsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(reviewerId: string, createReviewDto: CreateReviewDto) {
    // 1. Ensure the booking exists and belongs to the reviewer
    const booking = await this.prisma.bookings.findUnique({
      where: { id: createReviewDto.bookingId },
    });

    if (!booking) {
      throw new NotFoundException('Booking not found');
    }

    if (booking.learner_id !== reviewerId) {
      throw new BadRequestException('You can only review your own bookings');
    }

    if (booking.status !== 'confirmed') {
      throw new BadRequestException('You can only review completed/confirmed bookings');
    }

    // 2. Ensure they haven't already reviewed this booking
    const existingReview = await this.prisma.reviews.findFirst({
      where: { booking_id: createReviewDto.bookingId, reviewer_id: reviewerId },
    });

    if (existingReview) {
      throw new BadRequestException('You have already submitted a review for this booking');
    }

    // 3. Create the review
    return this.prisma.reviews.create({
      data: {
        reviewer_id: reviewerId,
        reviewee_id: booking.provider_id,
        listing_id: createReviewDto.listingId,
        booking_id: createReviewDto.bookingId,
        target: createReviewDto.target || 'listing',
        rating: createReviewDto.rating,
        title: createReviewDto.title,
        body: createReviewDto.body,
        is_anonymous: createReviewDto.isAnonymous || false,
        is_visible: true,
      },
    });
  }

  async findByListing(listingId: string) {
    return this.prisma.reviews.findMany({
      where: { listing_id: listingId, is_visible: true, deleted_at: null },
      include: {
        users_reviews_reviewer_idTousers: { select: { user_profiles: { select: { display_name: true, avatar_url: true } } } },
      },
      orderBy: { created_at: 'desc' },
    });
  }

  async getListingStats(listingId: string) {
    const aggregations = await this.prisma.reviews.aggregate({
      where: { listing_id: listingId, is_visible: true, deleted_at: null },
      _avg: { rating: true },
      _count: { id: true },
    });

    return {
      averageRating: aggregations._avg.rating || 0,
      totalReviews: aggregations._count.id,
    };
  }
}
