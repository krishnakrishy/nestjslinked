import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ID,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { JobApplicationService } from './job-application.service';
import { CreateJobApplicationInput } from './dto/create-job-application.input';
import { UpdateJobApplicationInput } from './dto/update-job-application.input';
import { JobApplication } from './job-application.model';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundException } from '@nestjs/common';
import { Job } from 'src/job/job.model';
import { Profile } from 'src/profile/profile.model';

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

  @Query(() => [JobApplication], { name: 'jobApplications' })
  async findAll() {
    return await this.jobApplicationService.findAll();
  }

  @Query(() => JobApplication, { name: 'jobApplication' })
  async findOne(@Args('id', { type: () => ID }) id: string) {
    return await this.jobApplicationService.findOne(id);
  }

  @Mutation(() => JobApplication)
  async updateJobApplication(
    @Args('id', { type: () => ID }) id: string,
    @Args('data') updateJobApplicationInput: UpdateJobApplicationInput,
  ) {
    const checkJob = await this.prisma.jobApplication.findUnique({
      where: {
        id: updateJobApplicationInput.jobId,
      },
    });
    if (!checkJob) {
      return new NotFoundException('job not found');
    }
    const checkprofile = await this.prisma.profile.findUnique({
      where: {
        id: updateJobApplicationInput.profileId,
      },
    });
    if (!checkprofile) {
      return await new NotFoundException('profile not found');
    }
    return this.jobApplicationService.update(id, updateJobApplicationInput);
  }

  @Mutation(() => JobApplication)
  removeJobApplication(@Args('id', { type: () => ID }) id: string) {
    return this.jobApplicationService.remove(id);
  }

  @ResolveField(() => Job)
  async appliedJob(@Parent() jobApp: JobApplication) {
    return await this.prisma.jobApplication
      .findUnique({ where: { id: jobApp.id } })
      .appliedJob();
  }

  @ResolveField(() => Profile)
  async appliedBy(@Parent() jobApp: JobApplication) {
    return await this.prisma.jobApplication
      .findUnique({ where: { id: jobApp.id } })
      .appliedBy();
  }
}
