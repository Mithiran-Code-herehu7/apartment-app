import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../../infrastructure/database/prisma/prisma.service';
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          let token = null;
          if (request && request.cookies) {
            token = request.cookies['token'];
          }
          // Fallback to Bearer token for non-browser clients/postman testing if needed
          if (!token && request.headers.authorization) {
            token = ExtractJwt.fromAuthHeaderAsBearerToken()(request);
          }
          return token;
        },
      ]),
      ignoreExpiration: false,
      secretOrKey: (() => {
        const secret = configService.get<string>('JWT_SECRET');
        if (process.env.NODE_ENV === 'production' && !secret) {
          throw new Error('JWT_SECRET must be defined in production');
        }
        return secret || 'fallback_secret_for_dev';
      })(),
    });
  }

  async validate(payload: any) {
    // Payload usually contains { sub: authUid (or id for demo), email: string }
    const user = await this.prisma.users.findFirst({
      where: { 
        OR: [
          { auth_uid: payload.sub },
          { id: payload.sub } // Fallback for demo users
        ]
      },
      include: {
        user_roles_user_roles_user_idTousers: { select: { role: true } },
      },
    });

    if (!user) {
      throw new UnauthorizedException('User not found in our database');
    }

    if (user.status !== 'verified') {
      throw new UnauthorizedException(`User account is ${user.status}`);
    }

    // This object is injected into request.user
    return {
      id: user.id,
      authUid: user.auth_uid,
      apartmentId: user.apartment_id,
      roles: user.user_roles_user_roles_user_idTousers.map((ur: any) => ur.role),
    };
  }
}
