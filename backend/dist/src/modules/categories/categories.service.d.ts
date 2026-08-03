import { PrismaService } from '../../infrastructure/database/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
export declare class CategoriesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: string;
        name: string;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
        parent_id: string | null;
        slug: string;
        description: string | null;
        icon_url: string | null;
        display_order: number;
    }[]>;
    findOne(slug: string): Promise<{
        other_categories: {
            id: string;
            name: string;
            is_active: boolean;
            created_at: Date;
            updated_at: Date;
            parent_id: string | null;
            slug: string;
            description: string | null;
            icon_url: string | null;
            display_order: number;
        }[];
    } & {
        id: string;
        name: string;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
        parent_id: string | null;
        slug: string;
        description: string | null;
        icon_url: string | null;
        display_order: number;
    }>;
    create(createCategoryDto: CreateCategoryDto): Promise<{
        id: string;
        name: string;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
        parent_id: string | null;
        slug: string;
        description: string | null;
        icon_url: string | null;
        display_order: number;
    }>;
}
