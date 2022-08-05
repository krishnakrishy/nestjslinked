import {
  Resolver,
  Query,
  Mutation,
  Args,
  ID,
  // ResolveField,
  // Parent,
} from '@nestjs/graphql';
import { JobService } from './job.service';

import { CreateJobInput } from './dto/create-job.input';
import { UpdateJobInput } from './dto/update-job.input';
import { Job } from './job.model';
import { PrismaService } from 'src/prisma/prisma.service';
import { BadRequestException } from '@nestjs/common';

@Resolver(() => Job)
export class JobResolver {
  constructor(
    private readonly jobService: JobService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => Job)
  async createJob(@Args('data') createJobInput: CreateJobInput) {
    // const check = await this.prisma.profile.findUnique({
    //   where: {
    //     id: createJobInput.profileId,
    //   },
    //   select: { type: true },
    // });
    // if (!check) {
    //   return new BadRequestException({ error: 'Recruiter can only post jobs' });
    // }
    return await this.jobService.create(createJobInput);
  }

  @Query(() => [Job])
  async jobs() {
    return await this.jobService.findAll();
  }

  @Query(() => Job, { name: 'job' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.jobService.findOne(id);
  }

  @Mutation(() => Job)
  async updateJob(
    @Args('id', { type: () => ID }) id: string,
    @Args('data') updateJobInput: UpdateJobInput,
  ) {
    // const check = await this.prisma.profile.findUnique({
    //   where: {
    //     id: updateJobInput.profileId,
    //   },
    //   select: { type: true },
    // });
    // if (!check) {
    //   return new BadRequestException({
    //     error: 'Recruiter can only update jobs',
    //   });
    // }
    await this.jobService.findOne(id);
    return this.jobService.update(id, updateJobInput);
  }

  @Mutation(() => Job)
  async removeJob(@Args('id', { type: () => ID }) id: string) {
    // const check = await this.prisma.profile.findUnique({
    //   where: {
    //     id,
    //   },
    //   select: { type: true },
    // });
    // if (!check) {
    //   return new BadRequestException({
    //     error: 'Recruiter can only delete jobs',
    //   });
    // }
    await this.jobService.findOne(id);
    return this.jobService.remove(id);
  }
  // @ResolveField(() => Profile)
  // async job(@Parent() job: Job) {
  //   return await this.prisma.job
  //     .findUnique({ where: { id: job.id } })
  //     .profile();
  // }

  // @ResolveField(() => [JobApplication])
  // async jobApplication(@Parent() job: Job) {
  //   return await this.prisma.job
  //     .findUnique({ where: { id: job.id } })
  //     .jobApplication();
  // }
}