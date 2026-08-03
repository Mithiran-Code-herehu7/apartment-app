import { IsNotEmpty, IsOptional, IsString, IsUUID, IsDateString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateBookingDto {
  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  listingId: string;

  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  slotId: string;

  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  pricingPlanId: string;

  @ApiProperty()
  @IsDateString()
  @IsNotEmpty()
  sessionStart: string;

  @ApiProperty()
  @IsDateString()
  @IsNotEmpty()
  sessionEnd: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  learnerNotes?: string;
}
