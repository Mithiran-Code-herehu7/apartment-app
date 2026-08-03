import { IsNotEmpty, IsEnum, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { booking_status } from '@prisma/client';

export class UpdateBookingStatusDto {
  @ApiProperty({ enum: booking_status })
  @IsEnum(booking_status)
  @IsNotEmpty()
  status: booking_status;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  reason?: string;
}
