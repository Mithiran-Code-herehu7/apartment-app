"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../infrastructure/database/prisma/prisma.service");
let ReviewsService = class ReviewsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(reviewerId, createReviewDto) {
        const booking = await this.prisma.bookings.findUnique({
            where: { id: createReviewDto.bookingId },
        });
        if (!booking) {
            throw new common_1.NotFoundException('Booking not found');
        }
        if (booking.learner_id !== reviewerId) {
            throw new common_1.BadRequestException('You can only review your own bookings');
        }
        if (booking.status !== 'confirmed') {
            throw new common_1.BadRequestException('You can only review completed/confirmed bookings');
        }
        const existingReview = await this.prisma.reviews.findFirst({
            where: { booking_id: createReviewDto.bookingId, reviewer_id: reviewerId },
        });
        if (existingReview) {
            throw new common_1.BadRequestException('You have already submitted a review for this booking');
        }
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
    async findByListing(listingId) {
        return this.prisma.reviews.findMany({
            where: { listing_id: listingId, is_visible: true, deleted_at: null },
            include: {
                users_reviews_reviewer_idTousers: { select: { user_profiles: { select: { display_name: true, avatar_url: true } } } },
            },
            orderBy: { created_at: 'desc' },
        });
    }
    async getListingStats(listingId) {
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
};
exports.ReviewsService = ReviewsService;
exports.ReviewsService = ReviewsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ReviewsService);
//# sourceMappingURL=reviews.service.js.map