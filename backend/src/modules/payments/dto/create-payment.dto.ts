import { IsNotEmpty, IsEnum, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { payment_method } from '@prisma/client';

export class CreatePaymentDto {
  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  bookingId: string;

  @ApiProperty({ enum: payment_method })
  @IsEnum(payment_method)
  @IsNotEmpty()
  paymentMethod: payment_method;
}
