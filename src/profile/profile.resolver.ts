import { Resolver, Query, Mutation, Args, Int, ID, ResolveField, Parent } from '@nestjs/graphql';
import { ProfileService } from './profile.service';
import { CreateProfileInput } from './dto/create-profile.input';
import { UpdateProfileInput } from './dto/update-profile.input';
import { Profile } from './profile.model';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from 'src/user/user.model';
import { UserService } from 'src/user/user.service';

@Resolver(() => Profile)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService,
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
  ) { }

  @Mutation(() => Profile)
  async createProfile(@Args('createProfileInput') createProfileInput: CreateProfileInput) {
    return await this.profileService.create(createProfileInput);
  }

  @Query(() => [Profile])
  async profiles() {
    return await this.profileService.findAll();
  }

  @Query(() => Profile, { name: 'profile' })
  async findOne(@Args('id', { type: () => ID }) id: string) {
    return await this.profileService.findOne(id);
  }

  @Mutation(() => Profile)
  async updateProfile(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateProfileInput') updateProfileInput: UpdateProfileInput) {
    await this.profileService.findOne(id)
    return this.profileService.update(id, updateProfileInput);
  }

  @Mutation(() => Profile)
  async removeProfile(@Args('id', { type: () => ID }) id: string) {
    await this.profileService.findOne(id)
    return this.profileService.remove(id);
  }
  // @ResolveField(()=> Recruiter)
  // async recruiter(@parent() profile:Profile){
  //   return await this.prisma.profile.findUnique({where :{id:profile.id}}).recruiter();
  // }

  // @ResolveField(()=>[JobApplication])
  // async jobapply(@parent()profile:Profile){
  //   return await this.prisma.profile.findUnique({where:{id:profile.id}}).jobapply();
  // }

  @ResolveField(() => User)
  async user(@Parent() profile: Profile) {
    return await this.prisma.profile.findUnique({ where: { id: profile.id } }).user();
  }
}
