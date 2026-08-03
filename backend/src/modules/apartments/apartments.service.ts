import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../infrastructure/database/prisma/prisma.service';

@Injectable()
export class ApartmentsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.apartments.findMany({
      where: { is_active: true },
      select: {
        id: true,
        name: true,
        city: true,
        state: true,
        country: true,
      },
    });
  }

  async findOne(id: string) {
    const apartment = await this.prisma.apartments.findUnique({
      where: { id, is_active: true },
    });

    if (!apartment) {
      throw new NotFoundException(`Apartment with ID ${id} not found`);
    }
    return apartment;
  }

  async verifyInvite(apartmentId: string, token: string) {
    // 1. Ensure apartment exists
    await this.findOne(apartmentId);

    // 2. Find the invite token
    const invite = await this.prisma.apartment_invites.findUnique({
      where: { token },
    });

    // 3. Validate token state
    if (!invite) {
      throw new NotFoundException('Invalid invite token');
    }

    if (invite.apartment_id !== apartmentId) {
      throw new BadRequestException('Invite token does not belong to this apartment');
    }

    if (invite.status !== 'pending') {
      throw new BadRequestException(`Invite token is no longer available (status: ${invite.status})`);
    }

    if (invite.token_expires_at < new Date()) {
      // Auto-expire it if we catch it during read
      await this.prisma.apartment_invites.update({
        where: { id: invite.id },
        data: { status: 'expired' },
      });
      throw new BadRequestException('Invite token has expired');
    }

    return {
      isValid: true,
      email: invite.invited_email,
      unitNumber: invite.unit_number,
      inviteId: invite.id,
    };
  }
}
