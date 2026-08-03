import { IsEmail, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'tok_neha_ghij789rst' })
  @IsString()
  @IsNotEmpty()
  inviteToken: string;

  @ApiProperty({ example: 'neha.kapoor@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '00000000-aaaa-aaaa-aaaa-000000000010' })
  @IsUUID()
  @IsNotEmpty()
  authUid: string;

  @ApiProperty({ example: 'Neha Kapoor' })
  @IsString()
  @IsNotEmpty()
  displayName: string;

  @ApiPropertyOptional({ example: '+919900000006' })
  @IsString()
  @IsOptional()
  phone?: string;
}
