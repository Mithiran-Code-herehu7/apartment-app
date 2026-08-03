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
exports.DisputesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../infrastructure/database/prisma/prisma.service");
let DisputesService = class DisputesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(reporterId, createDisputeDto) {
        const booking = await this.prisma.bookings.findUnique({
            where: { id: createDisputeDto.bookingId },
        });
        if (!booking) {
            throw new common_1.NotFoundException('Booking not found');
        }
        if (booking.learner_id !== reporterId && booking.provider_id !== reporterId) {
            throw new common_1.ForbiddenException('You can only dispute bookings you are a part of');
        }
        const existingDispute = await this.prisma.disputes.findFirst({
            where: { booking_id: booking.id, status: { in: ['open', 'under_review'] } },
        });
        if (existingDispute) {
            throw new common_1.BadRequestException('An active dispute already exists for this booking');
        }
        const reportedId = booking.learner_id === reporterId ? booking.provider_id : booking.learner_id;
        return this.prisma.disputes.create({
            data: {
                booking_id: booking.id,
                filed_by: reporterId,
                against_user_id: reportedId,
                subject: 'Booking Dispute',
                description: createDisputeDto.reason,
                apartment_id: (await this.prisma.users.findUnique({ where: { id: reporterId } })).apartment_id,
                evidence_urls: createDisputeDto.evidenceUrl ? [createDisputeDto.evidenceUrl] : [],
                status: 'open',
            },
        });
    }
    async findMine(userId) {
        return this.prisma.disputes.findMany({
            where: {
                OR: [
                    { filed_by: userId },
                    { against_user_id: userId },
                ],
            },
            orderBy: { created_at: 'desc' },
        });
    }
};
exports.DisputesService = DisputesService;
exports.DisputesService = DisputesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DisputesService);
//# sourceMappingURL=disputes.service.js.map