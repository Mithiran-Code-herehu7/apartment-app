import { IsNotEmpty, IsOptional, IsString, IsUUID, IsEnum, IsInt, IsArray } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { listing_mode, age_group } from '@prisma/client';

export class CreateListingDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  categoryId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  slug: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ enum: listing_mode, default: listing_mode.offline })
  @IsEnum(listing_mode)
  @IsOptional()
  mode?: listing_mode;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  locationDetails?: string;

  @ApiProperty({ enum: age_group, default: age_group.all_ages })
  @IsEnum(age_group)
  @IsOptional()
  ageGroup?: age_group;

  @ApiPropertyOptional({ default: 1 })
  @IsInt()
  @IsOptional()
  maxCapacity?: number;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  prerequisites?: string;

  @ApiPropertyOptional({ type: [String] })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  tags?: string[];

  @ApiPropertyOptional()
  @IsOptional()
  price?: number;
}
