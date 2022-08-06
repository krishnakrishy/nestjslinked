import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateJobApplicationInput } from './dto/create-job-application.input';
import { UpdateJobApplicationInput } from './dto/update-job-application.input';

@Injectable()
export class JobApplicationService {
  constructor(private prisma: PrismaService) {}
  create(createJobApplicationInput: CreateJobApplicationInput) {
    const data: Prisma.JobApplicationCreateInput = {
      appliedJob: { connect: { id: createJobApplicationInput.jobId } },
      appliedBy: { connect: { id: createJobApplicationInput.profileId } },
    };
    return this.prisma.jobApplication.create({ data });
  }

  async findAll() {
    return await this.prisma.jobApplication.findMany();
  }

  async findOne(id: string) {
    this.prisma.jobApplication.findFirst;
    const jobApplication = await this.prisma.jobApplication.findUnique({
      where: { id },
    });
    if (!jobApplication) {
      return new NotFoundException('jobapplication not found');
    }

    //   async update(
    //     id: string,
    //     updateJobApplicationInput: UpdateJobApplicationInput,
    //   ) {
    //     const data: Prisma.JobApplicationUpdateInput = {
    //       appliedJob: { connect: { id: updateJobApplicationInput.jobId } },
    //       appliedBy: { connect: { id: updateJobApplicationInput.profileId } },
    //     };
    //     return await this.prisma.jobApplication.update({ where: { id }, data });
    //   }

    //   async remove(id: string) {
    //     return await this.prisma.jobApplication.delete({ where: { id } });
    //   }
    // }
  }
}
