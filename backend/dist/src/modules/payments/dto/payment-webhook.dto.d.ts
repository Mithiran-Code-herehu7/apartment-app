export declare class PaymentWebhookDto {
    gatewayOrderId: string;
    gatewayPaymentId: string;
    gatewaySignature: string;
    status: string;
    rawResponse: Record<string, any>;
}
