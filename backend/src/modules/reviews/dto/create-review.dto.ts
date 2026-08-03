import { IsNotEmpty, IsOptional, IsString, IsUUID, IsInt, Min, Max, IsBoolean, IsEnum } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { review_target } from '@prisma/client';

export class CreateReviewDto {
  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  bookingId: string;

  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  listingId: string;

  @ApiProperty({ enum: review_target, default: review_target.listing })
  @IsEnum(review_target)
  @IsOptional()
  target?: review_target;

  @ApiProperty({ minimum: 1, maximum: 5 })
  @IsInt()
  @Min(1)
  @Max(5)
  @IsNotEmpty()
  rating: number;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  title?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  body?: string;

  @ApiPropertyOptional()
  @IsBoolean()
  @IsOptional()
  isAnonymous?: boolean;
}
