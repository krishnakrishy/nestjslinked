import { Field, ObjectType } from '@nestjs/graphql';
import { Profile } from 'src/profile/profile.model';

@ObjectType()
export class JobApplication {
  @Field()
  id: string;

  @Field(() => Job)
  appliedJob: Job;

  @Field(() => Profile)
  appliedBy: Profile;

  @Field()
  status: string;

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;
}