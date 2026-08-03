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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../infrastructure/database/prisma/prisma.service");
let UsersService = class UsersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createUserDto) {
        return this.prisma.$transaction(async (tx) => {
            const invite = await tx.apartment_invites.findUnique({
                where: { token: createUserDto.inviteToken },
            });
            if (!invite || invite.status !== 'pending' || invite.token_expires_at < new Date()) {
                throw new common_1.BadRequestException('Invalid or expired invite token');
            }
            const existingUser = await tx.users.findUnique({
                where: { auth_uid: createUserDto.authUid },
            });
            if (existingUser) {
                throw new common_1.BadRequestException('User with this Auth UID already exists');
            }
            const user = await tx.users.create({
                data: {
                    auth_uid: createUserDto.authUid,
                    email: createUserDto.email,
                    phone: createUserDto.phone,
                    apartment_id: invite.apartment_id,
                    unit_number: invite.unit_number,
                    invite_id: invite.id,
                    status: 'verified',
                    email_verified: true,
                },
            });
            await tx.user_profiles.create({
                data: {
                    user_id: user.id,
                    display_name: createUserDto.displayName,
                },
            });
            await tx.user_roles.create({
                data: {
                    user_id: user.id,
                    role: 'learner',
                },
            });
            await tx.apartment_invites.update({
                where: { id: invite.id },
                data: {
                    status: 'accepted',
                    used_by: user.id,
                },
            });
            return user;
        });
    }
    async findOne(id) {
        const user = await this.prisma.users.findUnique({
            where: { id, deleted_at: null },
            include: {
                user_profiles: true,
                user_roles_user_roles_user_idTousers: { select: { role: true } },
            },
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return user;
    }
    async findByAuthUid(authUid) {
        return this.prisma.users.findUnique({
            where: { auth_uid: authUid, deleted_at: null },
            include: { user_roles_user_roles_user_idTousers: { select: { role: true } } },
        });
    }
    async updateProfile(userId, updateProfileDto) {
        const profile = await this.prisma.user_profiles.findUnique({
            where: { user_id: userId },
        });
        if (!profile) {
            throw new common_1.NotFoundException('Profile not found');
        }
        return this.prisma.user_profiles.update({
            where: { user_id: userId },
            data: {
                display_name: updateProfileDto.displayName,
                bio: updateProfileDto.bio,
                avatar_url: updateProfileDto.avatarUrl,
                languages: updateProfileDto.languages,
                skills_offered: updateProfileDto.skillsOffered,
                is_public: updateProfileDto.isPublic,
            },
        });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map