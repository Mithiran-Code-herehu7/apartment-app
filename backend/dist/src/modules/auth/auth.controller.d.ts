import type { Response } from 'express';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(signupDto: SignupDto, response: Response): Promise<{
        user: {
            id: string;
            email: string;
            phone: string | null;
            displayName: string;
            roles: import("@prisma/client").$Enums.user_role[];
        };
    }>;
    login(loginDto: LoginDto, response: Response): Promise<{
        user: {
            id: string;
            email: string;
            phone: string | null;
            displayName: string;
            roles: import("@prisma/client").$Enums.user_role[];
        };
    }>;
    logout(response: Response): Promise<{
        message: string;
    }>;
}
