import { Controller, Get, Post, Body, Param, Patch, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiQuery, ApiParam } from '@nestjs/swagger';
import { ListingsService } from './listings.service';
import { CreateListingDto } from './dto/create-listing.dto';
import { UpdateListingDto } from './dto/update-listing.dto';
import { Roles } from '../../common/decorators/roles.decorator';
import { CurrentUser } from '../../common/decorators/current-user.decorator';

@ApiTags('listings')
@Controller('listings')
export class ListingsController {
  constructor(private readonly listingsService: ListingsService) {}

  @Roles('provider')
  @ApiBearerAuth()
  @Post()
  @ApiOperation({ summary: 'Create a new listing (Provider only)' })
  @ApiResponse({ status: 201, description: 'Listing created' })
  create(
    @CurrentUser() user: any,
    @Body() createListingDto: CreateListingDto,
  ) {
    return this.listingsService.create(user.id, user.apartmentId, createListingDto);
  }

  @Get()
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all approved listings for the users apartment' })
  @ApiQuery({ name: 'categoryId', required: false })
  @ApiResponse({ status: 200, description: 'List of listings' })
  findAll(
    @CurrentUser() user: any,
    @Query('categoryId') categoryId?: string,
  ) {
    // Only fetch listings for the user's apartment
    return this.listingsService.findAll(user.apartmentId, categoryId);
  }

  @Roles('provider')
  @Get('my-listings')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all listings created by the provider' })
  @ApiResponse({ status: 200, description: 'List of provider listings' })
  findMyListings(@CurrentUser() user: any) {
    return this.listingsService.findByProvider(user.id);
  }

  @Get(':id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get specific listing details' })
  @ApiParam({ name: 'id', description: 'Listing UUID' })
  @ApiResponse({ status: 200, description: 'Listing details' })
  findOne(@Param('id') id: string) {
    return this.listingsService.findOne(id);
  }

  @Roles('provider')
  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({ summary: 'Update a listing (Provider only)' })
  @ApiParam({ name: 'id', description: 'Listing UUID' })
  @ApiResponse({ status: 200, description: 'Listing updated' })
  update(
    @Param('id') id: string,
    @CurrentUser() user: any,
    @Body() updateListingDto: UpdateListingDto,
  ) {
    return this.listingsService.update(id, user.id, updateListingDto);
  }
}
