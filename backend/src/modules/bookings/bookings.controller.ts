import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiParam } from '@nestjs/swagger';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingStatusDto } from './dto/update-booking-status.dto';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { Roles } from '../../common/decorators/roles.decorator';

@ApiTags('bookings')
@ApiBearerAuth()
@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Roles('learner')
  @Post()
  @ApiOperation({ summary: 'Create a new booking (Learner only)' })
  @ApiResponse({ status: 201, description: 'Booking created' })
  create(
    @CurrentUser() user: any,
    @Body() createBookingDto: CreateBookingDto,
  ) {
    return this.bookingsService.create(user.id, createBookingDto);
  }

  @Roles('learner')
  @Get('my-learning')
  @ApiOperation({ summary: 'Get all bookings where user is the learner' })
  @ApiResponse({ status: 200, description: 'List of learner bookings' })
  getLearnerBookings(@CurrentUser() user: any) {
    return this.bookingsService.findByLearner(user.id);
  }

  @Roles('provider')
  @Get('my-teaching')
  @ApiOperation({ summary: 'Get all bookings where user is the provider' })
  @ApiResponse({ status: 200, description: 'List of provider bookings' })
  getProviderBookings(@CurrentUser() user: any) {
    return this.bookingsService.findByProvider(user.id);
  }

  @Patch(':id/status')
  @ApiOperation({ summary: 'Update booking status (cancel, confirm)' })
  @ApiParam({ name: 'id', description: 'Booking UUID' })
  @ApiResponse({ status: 200, description: 'Status updated' })
  updateStatus(
    @Param('id') id: string,
    @CurrentUser() user: any,
    @Body() updateBookingStatusDto: UpdateBookingStatusDto,
  ) {
    return this.bookingsService.updateStatus(id, user.id, updateBookingStatusDto);
  }
}
