import type { Response } from 'express';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    sendOtp(phone: string): Promise<{
        message: string;
    }>;
    login(phone: string, otp: string, response: Response): Promise<{
        user: {
            id: string;
            email: string;
            phone: string | null;
            roles: ("learner" | "provider")[];
        };
    }>;
    logout(response: Response): Promise<{
        message: string;
    }>;
}
