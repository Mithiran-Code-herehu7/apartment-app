import { payment_method } from '@prisma/client';
export declare class CreatePaymentDto {
    bookingId: string;
    paymentMethod: payment_method;
}
