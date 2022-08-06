import { Field, ObjectType } from '@nestjs/graphql';
import { Job } from 'src/job/job.model';
import { Profile } from 'src/profile/profile.model';

@ObjectType()
export class JobApplication {
  @Field()
  id: string;

  @Field(() => Job, { nullable: true })
  appliedJob: Job;

  @Field(() => Profile, { nullable: true })
  appliedBy: Profile;

  @Field()
  status: string;

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;
}
