import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRecruiterInput } from './dto/create-recruiter.input';
import { UpdateRecruiterInput } from './dto/update-recruiter.input';

@Injectable()
export class RecruiterService {
  constructor(private prisma: PrismaService) {}
  create(createRecruiterInput: CreateRecruiterInput) {
    const data: Prisma.RecruiterCreateInput = {
      role: createRecruiterInput.role,
      companyName: createRecruiterInput.companyName,
    };
    return this.prisma.recruiter.create({ data });
  }

  async findAll() {
    return await this.prisma.recruiter.findMany();
  }

  async findOne(id: string) {
    const recruiter = await this.prisma.recruiter.findUnique({ where: { id } });
    if (!recruiter) {
      throw new NotFoundException('recruiter not found');
    }
    return recruiter;
  }

  async update(id: string, updateRecruiterInput: UpdateRecruiterInput) {
    const data: Prisma.RecruiterUpdateInput = {
      role: updateRecruiterInput.role,
      companyName: updateRecruiterInput.companyName,
    };
    return await this.prisma.recruiter.update({ where: { id }, data });
  }

  async remove(id: string) {
    return await this.prisma.recruiter.delete({ where: { id } });
  }
}
