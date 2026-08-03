import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class VerifyInviteDto {
  @ApiProperty({
    description: 'The unique invite token sent to the resident via email',
    example: 'tok_neha_ghij789rst',
  })
  @IsString()
  @IsNotEmpty()
  token: string;
}
