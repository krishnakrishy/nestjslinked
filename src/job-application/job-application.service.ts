import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateJobApplicationInput } from './dto/create-job-application.input';

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
}
// async findone(id: string) {
//   this.prisma.jobApplication.findFirst;
//   const jobApplication = await this.prisma.jobApplication.findUnique({
//     where: { id },
//   });
//   if (!jobApplication) {
//     return new NotFoundException('jobapplication not found');
//   }
// }
