import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { JobApplicationService } from './job-application.service';
import { CreateJobApplicationInput } from './dto/create-job-application.input';
import { JobApplication } from './job-application.model';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundException } from '@nestjs/common';

@Resolver(() => JobApplication)
export class JobApplicationResolver {
  constructor(
    private readonly jobApplicationService: JobApplicationService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => JobApplication)
  async createJobApplication(
    @Args('data') createJobApplicationInput: CreateJobApplicationInput,
  ) {
    const checkJob = await this.prisma.job.findUnique({
      where: {
        id: createJobApplicationInput.jobId,
      },
    });
    if (!checkJob) {
      return new NotFoundException('job not found');
    }
    const checkprofile = await this.prisma.profile.findUnique({
      where: {
        id: createJobApplicationInput.profileId,
      },
    });
    if (!checkprofile) {
      return new NotFoundException('profile not found');
    }
    return await this.jobApplicationService.create(createJobApplicationInput);
  }

  @Query(() => [JobApplication], { name: 'jobApplication' })
  async findAll() {
    return await this.jobApplicationService.findAll();
  }
}

// @Query(() => JobApplication, { name: 'jobApplication' })
// async findone(@Args('id', { type: () => ID }) id: string) {
//   return await this.jobApplicationService.findOne(id);
// }

//   //  @ResolveField(() => Job)
//   // async job(@parent() joba: JobApplication){
//   //   return this.prisma.jobApplication.findUnique({where: { id: job.id}}).appliedJob();
//   // }
// }
