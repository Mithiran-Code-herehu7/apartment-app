import { DisputesService } from './disputes.service';
import { CreateDisputeDto } from './dto/create-dispute.dto';
export declare class DisputesController {
    private readonly disputesService;
    constructor(disputesService: DisputesService);
    create(user: any, createDisputeDto: CreateDisputeDto): Promise<{
        id: string;
        created_at: Date;
        updated_at: Date;
        apartment_id: string;
        status: import("@prisma/client").$Enums.dispute_status;
        description: string;
        booking_id: string;
        filed_by: string;
        against_user_id: string;
        subject: string;
        evidence_urls: string[];
        assigned_to: string | null;
        resolution: import("@prisma/client").$Enums.dispute_resolution | null;
        resolution_notes: string | null;
        resolved_at: Date | null;
    }>;
    findMine(user: any): Promise<{
        id: string;
        created_at: Date;
        updated_at: Date;
        apartment_id: string;
        status: import("@prisma/client").$Enums.dispute_status;
        description: string;
        booking_id: string;
        filed_by: string;
        against_user_id: string;
        subject: string;
        evidence_urls: string[];
        assigned_to: string | null;
        resolution: import("@prisma/client").$Enums.dispute_resolution | null;
        resolution_notes: string | null;
        resolved_at: Date | null;
    }[]>;
}
