import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './user.model';
import { PrismaService } from 'src/prisma/prisma.service';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => User)
  async createUser(@Args('data') data: CreateUserInput) {
    return await this.userService.create(data);
  }

  @Query(() => [User])
  async findallUsers() {
    return await this.userService.findAll();
  }
}

//   @Query(() => User, { name: 'user' })
//   findOne(@Args('id', { type: () => Int }) id: number) {
//     return this.userService.findOne(id);
//   }

//   @Mutation(() => User)
//   updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
//     return this.userService.update(updateUserInput, updateUserInput);
//   }

//   @Mutation(() => User)
//   removeUser(@Args('id', { type: () => Int }) id: number) {
//     return this.userService.remove(id);
//   }
//