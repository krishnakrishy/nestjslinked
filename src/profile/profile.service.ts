import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileInput } from './dto/create-profile.input';
import { UpdateProfileInput } from './dto/update-profile.input';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  create(createProfileInput: CreateProfileInput) {
    const data: Prisma.ProfileCreateInput = {
      fullName: createProfileInput.fullName,
      qualification: createProfileInput.qualification,
      skills: createProfileInput.skills,
      experience: createProfileInput.experience,
      location: createProfileInput.location,
      user: { connect: { id: createProfileInput.userId } },
    };

    return this.prisma.profile.create({ data });
  }

  async findAll() {
    return await this.prisma.profile.findMany();
  }

  async findOne(id: string) {
    const profile = await this.prisma.profile.findUnique({ where: { id } });
    if (!profile) {
      throw new NotFoundException('profile not found');
    }
    return profile;
  }

  async update(id: string, updateProfileInput: UpdateProfileInput) {
    const data: Prisma.ProfileUpdateInput = {
      fullName: updateProfileInput.fullName,
      qualification: updateProfileInput.qualification,
      skills: updateProfileInput.skills,
      experience: updateProfileInput.experience,
      location: updateProfileInput.location,
    };
    return await this.prisma.profile.update({ where: { id }, data });
  }

  async remove(id: string) {
    return await this.prisma.profile.delete({ where: { id } });
  }
}
