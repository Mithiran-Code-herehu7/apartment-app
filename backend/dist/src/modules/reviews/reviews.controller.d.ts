import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
export declare class ReviewsController {
    private readonly reviewsService;
    constructor(reviewsService: ReviewsService);
    create(user: any, createReviewDto: CreateReviewDto): Promise<{
        id: string;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
        title: string | null;
        listing_id: string;
        booking_id: string;
        target: import("@prisma/client").$Enums.review_target;
        rating: number;
        body: string | null;
        reviewer_id: string;
        reviewee_id: string;
        is_anonymous: boolean;
        is_visible: boolean;
        hidden_reason: string | null;
        provider_reply: string | null;
        replied_at: Date | null;
    }>;
    findByListing(listingId: string): Promise<({
        users_reviews_reviewer_idTousers: {
            user_profiles: {
                display_name: string;
                avatar_url: string | null;
            } | null;
        };
    } & {
        id: string;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
        title: string | null;
        listing_id: string;
        booking_id: string;
        target: import("@prisma/client").$Enums.review_target;
        rating: number;
        body: string | null;
        reviewer_id: string;
        reviewee_id: string;
        is_anonymous: boolean;
        is_visible: boolean;
        hidden_reason: string | null;
        provider_reply: string | null;
        replied_at: Date | null;
    })[]>;
    getStats(listingId: string): Promise<{
        averageRating: number;
        totalReviews: number;
    }>;
}
