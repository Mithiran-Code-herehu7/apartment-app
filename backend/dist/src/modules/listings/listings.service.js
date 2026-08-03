"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListingsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../infrastructure/database/prisma/prisma.service");
let ListingsService = class ListingsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(providerId, apartmentId, createListingDto) {
        return this.prisma.listings.create({
            data: {
                provider_id: providerId,
                apartment_id: apartmentId,
                category_id: createListingDto.categoryId,
                title: createListingDto.title,
                slug: createListingDto.slug,
                description: createListingDto.description,
                mode: createListingDto.mode,
                location_details: createListingDto.locationDetails,
                age_group: createListingDto.ageGroup,
                max_capacity: createListingDto.maxCapacity ?? 1,
                prerequisites: createListingDto.prerequisites,
                tags: createListingDto.tags || [],
                status: 'approved',
                pricing_plans: {
                    create: [{
                            name: 'Standard Plan',
                            description: 'Default standard pricing',
                            price_amount: createListingDto.price ?? 500,
                            currency: 'INR',
                            pricing_type: 'one_time'
                        }]
                },
                availability_slots: {
                    create: [{
                            day_of_week: 'monday',
                            start_time: new Date('1970-01-01T10:00:00Z'),
                            end_time: new Date('1970-01-01T11:00:00Z'),
                            max_capacity: createListingDto.maxCapacity ?? 1,
                            slot_type: 'recurring'
                        }]
                }
            },
        });
    }
    async findAll(apartmentId, categoryId) {
        return this.prisma.listings.findMany({
            where: {
                deleted_at: null,
                status: 'approved',
                ...(apartmentId && { apartment_id: apartmentId }),
                ...(categoryId && { category_id: categoryId }),
            },
            include: {
                users: { select: { id: true, user_profiles: { select: { display_name: true, avatar_url: true } } } },
                categories: { select: { id: true, name: true, slug: true } },
                pricing_plans: { where: { is_active: true } },
            },
            orderBy: { created_at: 'desc' },
        });
    }
    async findByProvider(providerId) {
        return this.prisma.listings.findMany({
            where: {
                provider_id: providerId,
                deleted_at: null,
            },
            include: {
                categories: { select: { id: true, name: true, slug: true } },
                pricing_plans: { where: { is_active: true } },
            },
            orderBy: { created_at: 'desc' },
        });
    }
    async findOne(id) {
        const listing = await this.prisma.listings.findUnique({
            where: { id, deleted_at: null },
            include: {
                users: { select: { id: true, user_profiles: true } },
                categories: true,
                listing_media: { orderBy: { display_order: 'asc' } },
                pricing_plans: { where: { is_active: true } },
                availability_slots: { where: { is_active: true } },
            },
        });
        if (!listing) {
            throw new common_1.NotFoundException(`Listing with ID ${id} not found`);
        }
        return listing;
    }
    async update(id, providerId, updateListingDto) {
        const listing = await this.findOne(id);
        if (listing.provider_id !== providerId) {
            throw new common_1.ForbiddenException('You can only update your own listings');
        }
        const updated = await this.prisma.listings.update({
            where: { id },
            data: {
                category_id: updateListingDto.categoryId,
                title: updateListingDto.title,
                slug: updateListingDto.slug,
                description: updateListingDto.description,
                mode: updateListingDto.mode,
                location_details: updateListingDto.locationDetails,
                age_group: updateListingDto.ageGroup,
                max_capacity: updateListingDto.maxCapacity,
                prerequisites: updateListingDto.prerequisites,
                tags: updateListingDto.tags,
            },
        });
        if (updateListingDto.price !== undefined) {
            const existingPlan = await this.prisma.pricing_plans.findFirst({
                where: { listing_id: id, is_active: true }
            });
            if (existingPlan) {
                await this.prisma.pricing_plans.update({
                    where: { id: existingPlan.id },
                    data: { price_amount: updateListingDto.price }
                });
            }
        }
        return updated;
    }
};
exports.ListingsService = ListingsService;
exports.ListingsService = ListingsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ListingsService);
//# sourceMappingURL=listings.service.js.map