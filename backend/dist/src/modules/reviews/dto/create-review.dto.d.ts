import { review_target } from '@prisma/client';
export declare class CreateReviewDto {
    bookingId: string;
    listingId: string;
    target?: review_target;
    rating: number;
    title?: string;
    body?: string;
    isAnonymous?: boolean;
}
