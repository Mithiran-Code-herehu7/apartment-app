import { Controller, Post, Body, Res } from '@nestjs/common';
import type { Response } from 'express';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { Public } from '../../common/decorators/public.decorator';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('send-otp')
  @ApiOperation({ summary: 'Send OTP securely' })
  @ApiResponse({ status: 200, description: 'OTP sent successfully' })
  async sendOtp(@Body('phone') phone: string) {
    if (!phone) {
      throw new Error('Phone is required');
    }
    return this.authService.sendOtp(phone);
  }

  @Public()
  @Post('login')
  @ApiOperation({ summary: 'Demo OTP login (Phone + OTP)' })
  @ApiResponse({ status: 200, description: 'Returns a JWT and user profile' })
  @ApiResponse({ status: 401, description: 'Invalid phone or OTP' })
  async login(
    @Body('phone') phone: string, 
    @Body('otp') otp: string,
    @Res({ passthrough: true }) response: Response
  ) {
    const result = await this.authService.login(phone, otp);
    
    // Set HTTP-Only cookie
    response.cookie('token', result.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    return { user: result.user };
  }

  @Post('logout')
  @ApiOperation({ summary: 'Logout user by clearing cookie' })
  @ApiResponse({ status: 200, description: 'Cookie cleared' })
  async logout(@Res({ passthrough: true }) response: Response) {
    response.cookie('token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      expires: new Date(0), // expire immediately
    });
    return { message: 'Logged out successfully' };
  }
}
