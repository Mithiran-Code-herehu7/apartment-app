import { listing_mode, age_group } from '@prisma/client';
export declare class CreateListingDto {
    categoryId: string;
    title: string;
    slug: string;
    description: string;
    mode?: listing_mode;
    locationDetails?: string;
    ageGroup?: age_group;
    maxCapacity?: number;
    prerequisites?: string;
    tags?: string[];
    price?: number;
}
