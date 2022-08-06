import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobApplicationModule } from './job-application/job-application.module';
import { JobModule } from './job/job.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProfileModule } from './profile/profile.module';
import { RecruiterModule } from './recruiter/recruiter.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: process.env.ENABLE_PLAYGROUND === 'true' ? true : false,
      introspection: process.env.ENABLE_INTROSPECTION === 'true' ? true : false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    PrismaModule,
    UserModule,
    ProfileModule,
    RecruiterModule,
    JobModule,
    JobApplicationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
