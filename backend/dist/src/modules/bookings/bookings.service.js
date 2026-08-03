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
exports.BookingsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../infrastructure/database/prisma/prisma.service");
let BookingsService = class BookingsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(learnerId, createBookingDto) {
        const listing = await this.prisma.listings.findUnique({
            where: { id: createBookingDto.listingId },
        });
        if (!listing) {
            throw new common_1.NotFoundException('Listing not found');
        }
        if (listing.provider_id === learnerId) {
            throw new common_1.BadRequestException('You cannot book your own listing');
        }
        let finalSlotId = createBookingDto.slotId;
        let finalPricingPlanId = createBookingDto.pricingPlanId;
        if (finalSlotId === '00000000-0000-0000-0000-000000000000') {
            const fallbackSlot = await this.prisma.availability_slots.create({
                data: {
                    listing_id: createBookingDto.listingId,
                    slot_type: 'one_time',
                    is_active: true,
                }
            });
            finalSlotId = fallbackSlot.id;
        }
        if (finalPricingPlanId === '00000000-0000-0000-0000-000000000000') {
            const fallbackPlan = await this.prisma.pricing_plans.create({
                data: {
                    listing_id: createBookingDto.listingId,
                    name: 'Standard Plan',
                    pricing_type: 'one_time',
                    price_amount: 500,
                }
            });
            finalPricingPlanId = fallbackPlan.id;
        }
        return this.prisma.bookings.create({
            data: {
                learner_id: learnerId,
                provider_id: listing.provider_id,
                listing_id: createBookingDto.listingId,
                slot_id: finalSlotId,
                pricing_plan_id: finalPricingPlanId,
                session_start: new Date(createBookingDto.sessionStart),
                session_end: new Date(createBookingDto.sessionEnd),
                learner_notes: createBookingDto.learnerNotes,
                status: 'pending',
            },
        });
    }
    async findByLearner(learnerId) {
        return this.prisma.bookings.findMany({
            where: { learner_id: learnerId, deleted_at: null },
            include: {
                listings: { select: { title: true, id: true } },
                users_bookings_provider_idTousers: { select: { user_profiles: { select: { display_name: true } } } },
            },
            orderBy: { session_start: 'desc' },
        });
    }
    async findByProvider(providerId) {
        return this.prisma.bookings.findMany({
            where: { provider_id: providerId, deleted_at: null },
            include: {
                listings: { select: { title: true, id: true } },
                users_bookings_learner_idTousers: { select: { user_profiles: { select: { display_name: true } } } },
            },
            orderBy: { session_start: 'asc' },
        });
    }
    async updateStatus(bookingId, userId, updateDto) {
        const booking = await this.prisma.bookings.findUnique({
            where: { id: bookingId },
        });
        if (!booking) {
            throw new common_1.NotFoundException('Booking not found');
        }
        if (booking.learner_id !== userId && booking.provider_id !== userId) {
            throw new common_1.ForbiddenException('You do not have access to this booking');
        }
        if (updateDto.status === 'confirmed' && booking.provider_id !== userId) {
            throw new common_1.ForbiddenException('Only the provider can confirm a booking');
        }
        return this.prisma.bookings.update({
            where: { id: bookingId },
            data: {
                status: updateDto.status,
                ...(updateDto.status === 'cancelled' && {
                    cancelled_at: new Date(),
                    cancellation_party: booking.learner_id === userId ? 'learner' : 'provider',
                    cancellation_reason: updateDto.reason,
                }),
            },
        });
    }
};
exports.BookingsService = BookingsService;
exports.BookingsService = BookingsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BookingsService);
//# sourceMappingURL=bookings.service.js.map