"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../../infrastructure/database/prisma/prisma.service");
const bcrypt = __importStar(require("bcryptjs"));
let AuthService = class AuthService {
    prisma;
    jwtService;
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async signup(signupDto) {
        const normalizedEmail = signupDto.email.toLowerCase().trim();
        let cleanPhone = signupDto.phone ? signupDto.phone.trim() : null;
        if (cleanPhone) {
            const digits = cleanPhone.replace(/\D/g, '').slice(-10);
            cleanPhone = `+91${digits}`;
        }
        const existingUser = await this.prisma.users.findFirst({
            where: {
                OR: [
                    { email: normalizedEmail },
                    ...(cleanPhone ? [{ phone: cleanPhone }] : []),
                ],
            },
        });
        if (existingUser) {
            if (existingUser.email === normalizedEmail) {
                throw new common_1.BadRequestException('An account with this email address already exists. Please log in.');
            }
            else {
                throw new common_1.BadRequestException('An account with this phone number already exists. Please log in.');
            }
        }
        let apartment = await this.prisma.apartments.findFirst({
            where: { name: { equals: signupDto.apartmentName, mode: 'insensitive' } },
        });
        if (!apartment) {
            apartment = await this.prisma.apartments.create({
                data: {
                    name: signupDto.apartmentName,
                    address_line1: `${signupDto.apartmentName} Community`,
                    city: 'Bengaluru',
                    state: 'Karnataka',
                    postal_code: '560001',
                },
            });
        }
        const hashedPassword = await bcrypt.hash(signupDto.password, 10);
        try {
            const user = await this.prisma.users.create({
                data: {
                    email: normalizedEmail,
                    phone: cleanPhone,
                    password_hash: hashedPassword,
                    apartment_id: apartment.id,
                    status: 'verified',
                    email_verified: true,
                    user_profiles: {
                        create: {
                            display_name: signupDto.displayName || signupDto.email.split('@')[0],
                        },
                    },
                    user_roles_user_roles_user_idTousers: {
                        create: [
                            { role: 'learner' },
                            { role: 'provider' },
                        ],
                    },
                },
                include: {
                    user_roles_user_roles_user_idTousers: { select: { role: true } },
                    user_profiles: true,
                },
            });
            const payload = { sub: user.id, email: user.email, phone: user.phone };
            return {
                access_token: this.jwtService.sign(payload),
                user: {
                    id: user.id,
                    email: user.email,
                    phone: user.phone,
                    displayName: user.user_profiles?.display_name || user.email.split('@')[0],
                    roles: user.user_roles_user_roles_user_idTousers.map((ur) => ur.role),
                },
            };
        }
        catch (error) {
            if (error.code === 'P2002') {
                const target = error.meta?.target;
                if (Array.isArray(target) && target.includes('phone')) {
                    throw new common_1.BadRequestException('An account with this phone number already exists.');
                }
                if (Array.isArray(target) && target.includes('email')) {
                    throw new common_1.BadRequestException('An account with this email address already exists.');
                }
            }
            throw error;
        }
    }
    async login(loginDto) {
        const normalizedEmail = loginDto.email.toLowerCase().trim();
        const user = await this.prisma.users.findUnique({
            where: { email: normalizedEmail },
            include: {
                user_roles_user_roles_user_idTousers: { select: { role: true } },
                user_profiles: true,
            },
        });
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid email or password.');
        }
        if (user.password_hash) {
            const isPasswordValid = await bcrypt.compare(loginDto.password, user.password_hash);
            if (!isPasswordValid) {
                throw new common_1.UnauthorizedException('Invalid email or password.');
            }
        }
        else {
            const hashedPassword = await bcrypt.hash(loginDto.password, 10);
            await this.prisma.users.update({
                where: { id: user.id },
                data: { password_hash: hashedPassword },
            });
        }
        const payload = { sub: user.id, email: user.email, phone: user.phone };
        return {
            access_token: this.jwtService.sign(payload),
            user: {
                id: user.id,
                email: user.email,
                phone: user.phone,
                displayName: user.user_profiles?.display_name || user.email.split('@')[0],
                roles: user.user_roles_user_roles_user_idTousers.map((ur) => ur.role),
            },
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