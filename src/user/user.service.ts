import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserInput } from './dto/create-user.input';
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
}
