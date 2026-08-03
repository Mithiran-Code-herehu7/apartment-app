import { IsNotEmpty, IsString, IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PaymentWebhookDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  gatewayOrderId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  gatewayPaymentId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  gatewaySignature: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  status: string; // 'success' | 'failed'

  @ApiProperty()
  @IsObject()
  rawResponse: Record<string, any>;
}
