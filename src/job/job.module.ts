import { Module } from '@nestjs/common';
import { JobService } from './job.service';
import { JobResolver } from './job.resolver';
import { ProfileModule } from 'src/profile/profile.module';

@Module({
  providers: [JobResolver, JobService],
  exports: [JobService],
  imports: [ProfileModule],
})
export class JobModule {}
