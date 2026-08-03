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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../../infrastructure/database/prisma/prisma.service");
let AuthService = class AuthService {
    prisma;
    jwtService;
    otpStore = new Map();
    DEMO_PHONES = ['+919999999999', '+918888888888', '9999999999', '8888888888'];
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async sendOtp(phone) {
        if (this.DEMO_PHONES.includes(phone)) {
            console.log(`[AUTH] Demo phone detected (${phone}). Use 123456.`);
            return { message: 'OTP sent successfully' };
        }
        const code = '123456';
        this.otpStore.set(phone, {
            code,
            expiresAt: Date.now() + 5 * 60 * 1000,
        });
        console.log(`\n=========================================`);
        console.log(`[SECURE MOCK] OTP for ${phone} is: ${code}`);
        console.log(`=========================================\n`);
        return { message: 'OTP sent successfully' };
    }
    async login(phone, otp) {
        if (this.DEMO_PHONES.includes(phone)) {
            if (otp !== '123456') {
                throw new common_1.UnauthorizedException('Invalid demo OTP.');
            }
        }
        else {
            const stored = this.otpStore.get(phone);
            if (!stored) {
                throw new common_1.UnauthorizedException('OTP expired or not requested.');
            }
            if (Date.now() > stored.expiresAt) {
                this.otpStore.delete(phone);
                throw new common_1.UnauthorizedException('OTP expired.');
            }
            if (stored.code !== otp) {
                throw new common_1.UnauthorizedException('Invalid OTP.');
            }
            this.otpStore.delete(phone);
        }
        let user = await this.prisma.users.findFirst({
            where: {
                OR: [
                    { phone },
                    { email: phone }
                ]
            },
            include: {
                user_roles_user_roles_user_idTousers: { select: { role: true } },
            },
        });
        if (!user) {
            let apartment = await this.prisma.apartments.findFirst();
            if (!apartment) {
                apartment = await this.prisma.apartments.create({
                    data: {
                        name: 'Demo Apartment Complex',
                        address_line1: '123 Demo Street',
                        city: 'Bengaluru',
                        state: 'Karnataka',
                        postal_code: '560001',
                    }
                });
            }
            user = await this.prisma.users.create({
                data: {
                    phone,
                    email: `${phone}@demo.com`,
                    apartment_id: apartment.id,
                    status: 'verified',
                    phone_verified: true,
                    user_profiles: {
                        create: {
                            display_name: `User ${phone.slice(-4)}`,
                        }
                    },
                    user_roles_user_roles_user_idTousers: {
                        create: [
                            { role: 'learner' },
                            { role: 'provider' }
                        ]
                    }
                },
                include: {
                    user_roles_user_roles_user_idTousers: { select: { role: true } },
                }
            });
        }
        if (user.status !== 'verified') {
            await this.prisma.users.update({
                where: { id: user.id },
                data: { status: 'verified', phone_verified: true }
            });
        }
        const payload = { sub: user.auth_uid || user.id, email: user.email, phone: user.phone };
        return {
            access_token: this.jwtService.sign(payload),
            user: {
                id: user.id,
                email: user.email,
                phone: user.phone,
                roles: user.user_roles_user_roles_user_idTousers.map((ur) => ur.role).filter((r) => r !== 'admin'),
            }
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map