import { PrismaService } from '../../infrastructure/database/prisma/prisma.service';
export declare class ApartmentsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: string;
        name: string;
        city: string;
        state: string;
        country: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        address_line1: string;
        address_line2: string | null;
        city: string;
        state: string;
        country: string;
        postal_code: string;
        total_units: number | null;
        admin_contact_email: string | null;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }>;
    verifyInvite(apartmentId: string, token: string): Promise<{
        isValid: boolean;
        email: string;
        unitNumber: string | null;
        inviteId: string;
    }>;
}
