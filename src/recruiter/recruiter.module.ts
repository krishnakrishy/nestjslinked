import { Module } from '@nestjs/common';
import { RecruiterService } from './recruiter.service';
import { RecruiterResolver } from './recruiter.resolver';

@Module({
  providers: [RecruiterService, RecruiterResolver],
})
export class RecruiterModule {}
