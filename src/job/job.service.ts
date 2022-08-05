import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateJobInput } from './dto/create-job.input';
import { UpdateJobInput } from './dto/update-job.input';

@Injectable()
export class JobService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createJobInput: CreateJobInput) {
    const data: Prisma.JobCreateInput = {
      title: createJobInput.title,
      companyName: createJobInput.companyName,
      // date: createJobInput.date,
      description: createJobInput.description,
      opening: createJobInput.opening,
      location: createJobInput.location,
      salary: createJobInput.salary,
      lastDate: createJobInput.lastDate,
      skill: createJobInput.skill,
      experience: createJobInput.experience,
    };
    return await this.prisma.job.create({ data });
  }

  async findAll() {
    return await this.prisma.job.findMany();
  }

  async findOne(id: string) {
    const job = await this.prisma.job.findUnique({ where: { id } });
    if (!job) {
      throw new NotFoundException('job not found');
    }
    return job;
  }

  async update(id: string, updateJobInput: UpdateJobInput) {
    const data: Prisma.JobUpdateInput = {
      title: updateJobInput.title,
      companyName: updateJobInput.companyName,
      // date: updateJobInput.date,
      description: updateJobInput.description,
      opening: updateJobInput.opening,
      location: updateJobInput.location,
      salary: updateJobInput.salary,
      lastDate: updateJobInput.lastDate,
      skill: updateJobInput.skill,
      experience: updateJobInput.experience,
    };
    return await this.prisma.job.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id);
    return await this.prisma.job.delete({ where: { id } });
  }
}
