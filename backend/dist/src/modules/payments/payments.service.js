"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../infrastructure/database/prisma/prisma.service");
let PaymentsService = class PaymentsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async initiatePayment(payerId, createPaymentDto) {
        const booking = await this.prisma.bookings.findUnique({
            where: { id: createPaymentDto.bookingId },
            include: {
                pricing_plans: true,
            },
        });
        if (!booking) {
            throw new common_1.NotFoundException('Booking not found');
        }
        if (booking.learner_id !== payerId) {
            throw new common_1.ForbiddenException('You can only pay for your own bookings');
        }
        if (booking.status !== 'pending') {
            throw new common_1.BadRequestException(`Cannot pay for booking with status: ${booking.status}`);
        }
        const existingPayment = await this.prisma.payments.findUnique({
            where: { booking_id: booking.id },
        });
        if (existingPayment) {
            throw new common_1.BadRequestException('A payment is already initiated for this booking');
        }
        const amount = booking.pricing_plans.price_amount;
        const platformFee = amount.mul(0.1);
        const providerAmount = amount.sub(platformFee);
        const mockGatewayOrderId = `order_${Math.random().toString(36).substr(2, 9)}`;
        return this.prisma.payments.create({
            data: {
                booking_id: booking.id,
                payer_id: payerId,
                payee_id: booking.provider_id,
                amount: amount,
                platform_fee: platformFee,
                provider_amount: providerAmount,
                currency: booking.pricing_plans.currency,
                payment_method: createPaymentDto.paymentMethod,
                status: 'initiated',
                gateway_name: 'mock_gateway',
                gateway_order_id: mockGatewayOrderId,
            },
        });
    }
    async handleWebhook(webhookDto) {
        const payment = await this.prisma.payments.findFirst({
            where: { gateway_order_id: webhookDto.gatewayOrderId },
        });
        if (!payment) {
            throw new common_1.NotFoundException('Payment record not found for this order ID');
        }
        return this.prisma.$transaction(async (tx) => {
            const status = webhookDto.status === 'success' ? 'succeeded' : 'failed';
            const updatedPayment = await tx.payments.update({
                where: { id: payment.id },
                data: {
                    status: status,
                    gateway_payment_id: webhookDto.gatewayPaymentId,
                    gateway_signature: webhookDto.gatewaySignature,
                    gateway_raw_response: webhookDto.rawResponse,
                    ...(status === 'succeeded' && { succeeded_at: new Date() }),
                    ...(status === 'failed' && { failed_at: new Date() }),
                },
            });
            if (status === 'succeeded') {
                await tx.bookings.update({
                    where: { id: payment.booking_id },
                    data: { status: 'confirmed' },
                });
            }
            return updatedPayment;
        });
    }
};
exports.PaymentsService = PaymentsService;
exports.PaymentsService = PaymentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PaymentsService);
//# sourceMappingURL=payments.service.js.map