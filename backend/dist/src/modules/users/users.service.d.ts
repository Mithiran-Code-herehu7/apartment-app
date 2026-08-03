import { PrismaService } from '../../infrastructure/database/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<{
        id: string;
        created_at: Date;
        updated_at: Date;
        auth_uid: string | null;
        email: string;
        phone: string | null;
        apartment_id: string;
        unit_number: string | null;
        invite_id: string | null;
        status: import("@prisma/client").$Enums.user_status;
        email_verified: boolean;
        phone_verified: boolean;
        last_login_at: Date | null;
        deleted_at: Date | null;
    }>;
    findOne(id: string): Promise<{
        user_profiles: {
            id: string;
            created_at: Date;
            updated_at: Date;
            user_id: string;
            display_name: string;
            avatar_url: string | null;
            bio: string | null;
            languages: string[];
            skills_offered: string[];
            interests: string[];
            website_url: string | null;
            linkedin_url: string | null;
            is_public: boolean;
        } | null;
        user_roles_user_roles_user_idTousers: {
            role: import("@prisma/client").$Enums.user_role;
        }[];
    } & {
        id: string;
        created_at: Date;
        updated_at: Date;
        auth_uid: string | null;
        email: string;
        phone: string | null;
        apartment_id: string;
        unit_number: string | null;
        invite_id: string | null;
        status: import("@prisma/client").$Enums.user_status;
        email_verified: boolean;
        phone_verified: boolean;
        last_login_at: Date | null;
        deleted_at: Date | null;
    }>;
    findByAuthUid(authUid: string): Promise<({
        user_roles_user_roles_user_idTousers: {
            role: import("@prisma/client").$Enums.user_role;
        }[];
    } & {
        id: string;
        created_at: Date;
        updated_at: Date;
        auth_uid: string | null;
        email: string;
        phone: string | null;
        apartment_id: string;
        unit_number: string | null;
        invite_id: string | null;
        status: import("@prisma/client").$Enums.user_status;
        email_verified: boolean;
        phone_verified: boolean;
        last_login_at: Date | null;
        deleted_at: Date | null;
    }) | null>;
    updateProfile(userId: string, updateProfileDto: UpdateProfileDto): Promise<{
        id: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        display_name: string;
        avatar_url: string | null;
        bio: string | null;
        languages: string[];
        skills_offered: string[];
        interests: string[];
        website_url: string | null;
        linkedin_url: string | null;
        is_public: boolean;
    }>;
}
