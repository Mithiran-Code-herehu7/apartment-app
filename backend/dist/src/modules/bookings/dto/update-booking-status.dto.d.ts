import { booking_status } from '@prisma/client';
export declare class UpdateBookingStatusDto {
    status: booking_status;
    reason?: string;
}
