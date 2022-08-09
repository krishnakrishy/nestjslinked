import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './user.model';
import { PrismaService } from 'src/prisma/prisma.service';
import { BadRequestException } from '@nestjs/common';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => User)
  async createUser(@Args('data') data: CreateUserInput) {
    try {
      const checkName = this.prisma.user.findUnique({
        where: {
          userName: data.userName,
        },
      });
      if (checkName) {
        throw new BadRequestException('UserName already exists');
      }
      const checkEmail = this.prisma.user.findUnique({
        where: {
          email: data.email,
        },
      });
      if (checkEmail) {
        throw new BadRequestException('email already exists');
      }
      const checkMobile = this.prisma.user.findUnique({
        where: {
          mobile: data.mobile,
        },
      });
      if (checkMobile) {
        throw new BadRequestException('mobile already exists');
      }
      return await this.userService.create(data);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Query(() => [User])
  async findallUsers() {
    return await this.userService.findAll();
  }
}
