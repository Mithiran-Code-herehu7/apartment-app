import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiParam } from '@nestjs/swagger';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { Public } from '../../common/decorators/public.decorator';

@ApiTags('reviews')
@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @ApiBearerAuth()
  @Post()
  @ApiOperation({ summary: 'Submit a new review for a booking' })
  @ApiResponse({ status: 201, description: 'Review submitted successfully' })
  create(
    @CurrentUser() user: any,
    @Body() createReviewDto: CreateReviewDto,
  ) {
    return this.reviewsService.create(user.id, createReviewDto);
  }

  @Public()
  @Get('listing/:listingId')
  @ApiOperation({ summary: 'Get all published reviews for a listing' })
  @ApiParam({ name: 'listingId', description: 'Listing UUID' })
  @ApiResponse({ status: 200, description: 'List of reviews' })
  findByListing(@Param('listingId') listingId: string) {
    return this.reviewsService.findByListing(listingId);
  }

  @Public()
  @Get('listing/:listingId/stats')
  @ApiOperation({ summary: 'Get review statistics for a listing' })
  @ApiParam({ name: 'listingId', description: 'Listing UUID' })
  @ApiResponse({ status: 200, description: 'Review stats (avg rating, count)' })
  getStats(@Param('listingId') listingId: string) {
    return this.reviewsService.getListingStats(listingId);
  }
}
