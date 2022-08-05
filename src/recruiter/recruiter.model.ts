import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Recruiter {
  @Field(() => ID)
  id: string;

  @Field()
  role: string;

  @Field()
  companyName: string;
}
