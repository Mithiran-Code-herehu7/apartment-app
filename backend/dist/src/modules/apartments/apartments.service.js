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
exports.ApartmentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../infrastructure/database/prisma/prisma.service");
let ApartmentsService = class ApartmentsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.apartments.findMany({
            where: { is_active: true },
            select: {
                id: true,
                name: true,
                city: true,
                state: true,
                country: true,
            },
        });
    }
    async findOne(id) {
        const apartment = await this.prisma.apartments.findUnique({
            where: { id, is_active: true },
        });
        if (!apartment) {
            throw new common_1.NotFoundException(`Apartment with ID ${id} not found`);
        }
        return apartment;
    }
    async verifyInvite(apartmentId, token) {
        await this.findOne(apartmentId);
        const invite = await this.prisma.apartment_invites.findUnique({
            where: { token },
        });
        if (!invite) {
            throw new common_1.NotFoundException('Invalid invite token');
        }
        if (invite.apartment_id !== apartmentId) {
            throw new common_1.BadRequestException('Invite token does not belong to this apartment');
        }
        if (invite.status !== 'pending') {
            throw new common_1.BadRequestException(`Invite token is no longer available (status: ${invite.status})`);
        }
        if (invite.token_expires_at < new Date()) {
            await this.prisma.apartment_invites.update({
                where: { id: invite.id },
                data: { status: 'expired' },
            });
            throw new common_1.BadRequestException('Invite token has expired');
        }
        return {
            isValid: true,
            email: invite.invited_email,
            unitNumber: invite.unit_number,
            inviteId: invite.id,
        };
    }
};
exports.ApartmentsService = ApartmentsService;
exports.ApartmentsService = ApartmentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ApartmentsService);
//# sourceMappingURL=apartments.service.js.map