import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';


@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateUserInput) {
    const datas: Prisma.UserCreateInput = {
      userName: data.userName,
      email: data.email,
      password: data.password,
      mobile: data.mobile,
    };
    return await this.prisma.user.create({ data: datas });
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserInput: UpdateUserInput) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
