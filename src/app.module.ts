import {  ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    PrismaModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: process.env.ENABLE_PLAYGROUND === 'true' ? true : false,
      introspection: process.env.ENABLE_INTROSPECTION === 'true' ? true : false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql')}),
    UserModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
