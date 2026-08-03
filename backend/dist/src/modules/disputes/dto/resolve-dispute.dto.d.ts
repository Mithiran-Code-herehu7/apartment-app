import { dispute_status } from '@prisma/client';
export declare class ResolveDisputeDto {
    status: dispute_status;
    resolutionNotes: string;
}
