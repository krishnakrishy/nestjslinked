import { Module } from '@nestjs/common';
import { JobApplicationService } from './job-application.service';
import { JobApplicationResolver } from './job-application.resolver';
import { JobModule } from 'src/job/job.module';

@Module({
  providers: [JobApplicationResolver, JobApplicationService],
  exports: [JobApplicationService],
  imports: [JobModule],
})
export class JobApplicationModule {}
