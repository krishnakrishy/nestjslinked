import { Field, ID, ObjectType } from '@nestjs/graphql';
import { JobApplication } from 'src/job-application/job-application.model';

@ObjectType()
export class Job {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  companyName: string;

  // @Field()
  // date: Date;

  @Field()
  description: string;

  @Field()
  opening: string;

  @Field()
  location: string;

  @Field()
  salary: string;

  @Field()
  lastDate: Date;

  @Field()
  skill: string;

  @Field()
  experience: string;

  // @Field(() => profile)
  // profile: Profile;

  // @Field()
  // profileId: string;

  @Field(() => [JobApplication], { nullable: true })
  jobapplication: JobApplication[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
