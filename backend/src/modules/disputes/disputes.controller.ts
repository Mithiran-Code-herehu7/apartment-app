import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { DisputesService } from './disputes.service';
import { CreateDisputeDto } from './dto/create-dispute.dto';
import { CurrentUser } from '../../common/decorators/current-user.decorator';

@ApiTags('disputes')
@ApiBearerAuth()
@Controller('disputes')
export class DisputesController {
  constructor(private readonly disputesService: DisputesService) {}

  @Post()
  @ApiOperation({ summary: 'Open a dispute for a booking' })
  @ApiResponse({ status: 201, description: 'Dispute opened successfully' })
  create(
    @CurrentUser() user: any,
    @Body() createDisputeDto: CreateDisputeDto,
  ) {
    return this.disputesService.create(user.id, createDisputeDto);
  }

  @Get('my-disputes')
  @ApiOperation({ summary: 'Get all disputes involving the current user' })
  @ApiResponse({ status: 200, description: 'List of disputes' })
  findMine(@CurrentUser() user: any) {
    return this.disputesService.findMine(user.id);
  }
}
