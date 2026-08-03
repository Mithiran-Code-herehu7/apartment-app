import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../infrastructure/database/prisma/prisma.service';

@Injectable()
export class AuthService {
  // In-memory store for OTPs (in production, use Redis or DB)
  private otpStore = new Map<string, { code: string; expiresAt: number }>();
  private readonly DEMO_PHONES = ['+919999999999', '+918888888888', '9999999999', '8888888888'];

  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async sendOtp(phone: string) {
    if (this.DEMO_PHONES.includes(phone)) {
      console.log(`[AUTH] Demo phone detected (${phone}). Use 123456.`);
      return { message: 'OTP sent successfully' };
    }

    // Generate random 6-digit OTP (Hardcoded to 123456 for interview/testing purposes)
    const code = '123456';
    
    // Store with 5 minute expiration
    this.otpStore.set(phone, {
      code,
      expiresAt: Date.now() + 5 * 60 * 1000,
    });

    console.log(`\n=========================================`);
    console.log(`[SECURE MOCK] OTP for ${phone} is: ${code}`);
    console.log(`=========================================\n`);

    return { message: 'OTP sent successfully' };
  }

  async login(phone: string, otp: string) {
    if (this.DEMO_PHONES.includes(phone)) {
      if (otp !== '123456') {
        throw new UnauthorizedException('Invalid demo OTP.');
      }
    } else {
      const stored = this.otpStore.get(phone);
      if (!stored) {
        throw new UnauthorizedException('OTP expired or not requested.');
      }
      if (Date.now() > stored.expiresAt) {
        this.otpStore.delete(phone);
        throw new UnauthorizedException('OTP expired.');
      }
      if (stored.code !== otp) {
        throw new UnauthorizedException('Invalid OTP.');
      }
      // Validated successfully, clear OTP
      this.otpStore.delete(phone);
    }

    let user = await this.prisma.users.findFirst({
      where: { 
        OR: [
          { phone },
          { email: phone } // Fallback for demo users that might only have email seeded
        ]
      },
      include: {
        user_roles_user_roles_user_idTousers: { select: { role: true } },
      },
    });

    if (!user) {
      // For demo purposes, auto-create the user if they don't exist!
      // First, get or create a dummy apartment
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

      // Auto-create user
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

    // Auto-verify for demo purposes if not verified
    if (user.status !== 'verified') {
      await this.prisma.users.update({
        where: { id: user.id },
        data: { status: 'verified', phone_verified: true }
      });
    }

    // Issue a JWT. The payload needs to match what JwtStrategy expects: { sub: authUid }
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
}
