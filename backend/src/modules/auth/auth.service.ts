import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../infrastructure/database/prisma/prisma.service';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async signup(signupDto: SignupDto) {
    const normalizedEmail = signupDto.email.toLowerCase().trim();
    let cleanPhone = signupDto.phone ? signupDto.phone.trim() : null;
    if (cleanPhone) {
      const digits = cleanPhone.replace(/\D/g, '').slice(-10);
      cleanPhone = `+91${digits}`;
    }

    // Check if user already exists by email or phone
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
        throw new BadRequestException('An account with this email address already exists. Please log in.');
      } else {
        throw new BadRequestException('An account with this phone number already exists. Please log in.');
      }
    }

    // Find or create apartment complex
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

    // Hash password
    const hashedPassword = await bcrypt.hash(signupDto.password, 10);

    try {
      // Create User
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
    } catch (error: any) {
      if (error.code === 'P2002') {
        const target = error.meta?.target;
        if (Array.isArray(target) && target.includes('phone')) {
          throw new BadRequestException('An account with this phone number already exists.');
        }
        if (Array.isArray(target) && target.includes('email')) {
          throw new BadRequestException('An account with this email address already exists.');
        }
      }
      throw error;
    }
  }

  async login(loginDto: LoginDto) {
    const normalizedEmail = loginDto.email.toLowerCase().trim();

    const user = await this.prisma.users.findUnique({
      where: { email: normalizedEmail },
      include: {
        user_roles_user_roles_user_idTousers: { select: { role: true } },
        user_profiles: true,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password.');
    }

    // If password_hash exists, verify using bcrypt
    if (user.password_hash) {
      const isPasswordValid = await bcrypt.compare(loginDto.password, user.password_hash);
      if (!isPasswordValid) {
        throw new UnauthorizedException('Invalid email or password.');
      }
    } else {
      // Legacy seeded user without password_hash: set password_hash on first successful login or reject
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
}
