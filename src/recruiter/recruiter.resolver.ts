import { Resolver, Mutation, Args, Int, ID, Query } from '@nestjs/graphql';
import { RecruiterService } from './recruiter.service';
import { CreateRecruiterInput } from './dto/create-recruiter.input';
import { UpdateRecruiterInput } from './dto/update-recruiter.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { Recruiter } from './recruiter.model';

@Resolver(() => Recruiter)
export class RecruiterResolver {
  constructor(
    private readonly recruiterService: RecruiterService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => Recruiter)
  async createRecruiter(
    @Args('data') createRecruiterInput: CreateRecruiterInput,
  ) {
    return await this.recruiterService.create(createRecruiterInput);
  }

  @Query(() => [Recruiter])
  async findAll() {
    return await this.recruiterService.findAll();
  }

  @Query(() => Recruiter, { name: 'recruiter' })
  async findOne(@Args('id', { type: () => ID }) id: string) {
    return await this.recruiterService.findOne(id);
  }

  @Mutation(() => Recruiter)
  async updateRecruiter(
    @Args('id', { type: () => ID }) id: string,
    @Args('data') updateRecruiterInput: UpdateRecruiterInput,
  ) {
    await this.recruiterService.findOne(id);
    return await this.recruiterService.update(id, updateRecruiterInput);
  }

  @Mutation(() => Recruiter)
  async removeRecruiter(@Args('id', { type: () => ID }) id: string) {
    return await this.recruiterService.remove(id);
  }
}
