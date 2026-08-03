import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { ApartmentsService } from './apartments.service';
import { VerifyInviteDto } from './dto/verify-invite.dto';
import { Public } from '../../common/decorators/public.decorator';

@ApiTags('apartments')
@Controller('apartments')
export class ApartmentsController {
  constructor(private readonly apartmentsService: ApartmentsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all active apartments' })
  @ApiResponse({ status: 200, description: 'List of apartments' })
  findAll() {
    return this.apartmentsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific apartment by ID' })
  @ApiParam({ name: 'id', description: 'Apartment UUID' })
  @ApiResponse({ status: 200, description: 'Apartment details' })
  @ApiResponse({ status: 404, description: 'Apartment not found' })
  findOne(@Param('id') id: string) {
    return this.apartmentsService.findOne(id);
  }

  @Public()
  @Post(':id/verify-invite')
  @ApiOperation({ summary: 'Verify an invite token for an apartment' })
  @ApiParam({ name: 'id', description: 'Apartment UUID' })
  @ApiResponse({ status: 200, description: 'Token is valid' })
  @ApiResponse({ status: 400, description: 'Token invalid or expired' })
  verifyInvite(
    @Param('id') id: string,
    @Body() verifyInviteDto: VerifyInviteDto,
  ) {
    return this.apartmentsService.verifyInvite(id, verifyInviteDto.token);
  }
}
