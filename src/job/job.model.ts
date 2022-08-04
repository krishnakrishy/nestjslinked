import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Job {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  companyName: string;

  @Field()
  date: Date;

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
  // createdBy: Profile;

  // @Field()
  // profileId: string;

  // @Field(() => [jobApplication], { nullable: true })
  // jobapplication: jobApplication[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
