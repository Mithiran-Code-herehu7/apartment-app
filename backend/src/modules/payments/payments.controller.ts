import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { PaymentWebhookDto } from './dto/payment-webhook.dto';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { Public } from '../../common/decorators/public.decorator';

@ApiTags('payments')
@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @ApiBearerAuth()
  @Post('initiate')
  @ApiOperation({ summary: 'Initiate a payment for a booking' })
  @ApiResponse({ status: 201, description: 'Payment order created' })
  initiatePayment(
    @CurrentUser() user: any,
    @Body() createPaymentDto: CreatePaymentDto,
  ) {
    return this.paymentsService.initiatePayment(user.id, createPaymentDto);
  }

  @Public()
  @Post('webhook')
  @ApiOperation({ summary: 'Webhook endpoint for payment gateways' })
  @ApiResponse({ status: 200, description: 'Webhook processed' })
  handleWebhook(@Body() webhookDto: PaymentWebhookDto) {
    return this.paymentsService.handleWebhook(webhookDto);
  }
}
