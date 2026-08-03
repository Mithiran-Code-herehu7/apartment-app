import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../infrastructure/database/prisma/prisma.service';
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    private otpStore;
    private readonly DEMO_PHONES;
    constructor(prisma: PrismaService, jwtService: JwtService);
    sendOtp(phone: string): Promise<{
        message: string;
    }>;
    login(phone: string, otp: string): Promise<{
        access_token: string;
        user: {
            id: string;
            email: string;
            phone: string | null;
            roles: ("learner" | "provider")[];
        };
    }>;
}
