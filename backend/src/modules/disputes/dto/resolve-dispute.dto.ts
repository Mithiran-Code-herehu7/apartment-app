import { IsNotEmpty, IsString, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { dispute_status } from '@prisma/client';

export class ResolveDisputeDto {
  @ApiProperty({ enum: dispute_status })
  @IsEnum(dispute_status)
  @IsNotEmpty()
  status: dispute_status;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  resolutionNotes: string;
}
