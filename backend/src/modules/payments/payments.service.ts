import { Injectable, NotFoundException, BadRequestException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../../infrastructure/database/prisma/prisma.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { PaymentWebhookDto } from './dto/payment-webhook.dto';

@Injectable()
export class PaymentsService {
  constructor(private readonly prisma: PrismaService) {}

  async initiatePayment(payerId: string, createPaymentDto: CreatePaymentDto) {
    const booking = await this.prisma.bookings.findUnique({
      where: { id: createPaymentDto.bookingId },
      include: {
        pricing_plans: true,
      },
    });

    if (!booking) {
      throw new NotFoundException('Booking not found');
    }

    if (booking.learner_id !== payerId) {
      throw new ForbiddenException('You can only pay for your own bookings');
    }

    if (booking.status !== 'pending') {
      throw new BadRequestException(`Cannot pay for booking with status: ${booking.status}`);
    }

    // Check if payment already exists
    const existingPayment = await this.prisma.payments.findUnique({
      where: { booking_id: booking.id },
    });

    if (existingPayment) {
      throw new BadRequestException('A payment is already initiated for this booking');
    }

    // Calculate amounts
    const amount = booking.pricing_plans.price_amount;
    // Example: 10% platform fee
    const platformFee = amount.mul(0.1);
    const providerAmount = amount.sub(platformFee);

    // In a real app, this is where you call Stripe/Razorpay API to create an order
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

  async handleWebhook(webhookDto: PaymentWebhookDto) {
    const payment = await this.prisma.payments.findFirst({
      where: { gateway_order_id: webhookDto.gatewayOrderId },
    });

    if (!payment) {
      throw new NotFoundException('Payment record not found for this order ID');
    }

    // In a real app, verify webhook signature here

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
          data: { status: 'confirmed' }, // Auto-confirm on payment
        });
      }

      return updatedPayment;
    });
  }
}
