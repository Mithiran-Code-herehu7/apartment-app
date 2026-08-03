import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../infrastructure/database/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    return this.prisma.$transaction(async (tx) => {
      // 1. Verify invite
      const invite = await tx.apartment_invites.findUnique({
        where: { token: createUserDto.inviteToken },
      });

      if (!invite || invite.status !== 'pending' || invite.token_expires_at < new Date()) {
        throw new BadRequestException('Invalid or expired invite token');
      }

      // 2. Ensure user doesnt already exist
      const existingUser = await tx.users.findUnique({
        where: { auth_uid: createUserDto.authUid },
      });

      if (existingUser) {
        throw new BadRequestException('User with this Auth UID already exists');
      }

      // 3. Create user
      const user = await tx.users.create({
        data: {
          auth_uid: createUserDto.authUid,
          email: createUserDto.email,
          phone: createUserDto.phone,
          apartment_id: invite.apartment_id,
          unit_number: invite.unit_number,
          invite_id: invite.id,
          status: 'verified', // Automatically verified because they used a valid invite
          email_verified: true,
        },
      });

      // 4. Create base profile
      await tx.user_profiles.create({
        data: {
          user_id: user.id,
          display_name: createUserDto.displayName,
        },
      });

      // 5. Assign default 'learner' role
      await tx.user_roles.create({
        data: {
          user_id: user.id,
          role: 'learner',
        },
      });

      // 6. Update invite status
      await tx.apartment_invites.update({
        where: { id: invite.id },
        data: {
          status: 'accepted',
          used_by: user.id,
        },
      });

      return user;
    });
  }

  async findOne(id: string) {
    const user = await this.prisma.users.findUnique({
      where: { id, deleted_at: null },
      include: {
        user_profiles: true,
        user_roles_user_roles_user_idTousers: { select: { role: true } },
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async findByAuthUid(authUid: string) {
    return this.prisma.users.findUnique({
      where: { auth_uid: authUid, deleted_at: null },
      include: { user_roles_user_roles_user_idTousers: { select: { role: true } } },
    });
  }

  async updateProfile(userId: string, updateProfileDto: UpdateProfileDto) {
    const profile = await this.prisma.user_profiles.findUnique({
      where: { user_id: userId },
    });

    if (!profile) {
      throw new NotFoundException('Profile not found');
    }

    return this.prisma.user_profiles.update({
      where: { user_id: userId },
      data: {
        display_name: updateProfileDto.displayName,
        bio: updateProfileDto.bio,
        avatar_url: updateProfileDto.avatarUrl,
        languages: updateProfileDto.languages,
        skills_offered: updateProfileDto.skillsOffered,
        is_public: updateProfileDto.isPublic,
      },
    });
  }
}
