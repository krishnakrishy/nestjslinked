import { Field, ObjectType } from '@nestjs/graphql';
import { Recruiter } from 'src/recruiter/recruiter.model';
import { User } from 'src/user/user.model';

@ObjectType()
export class Profile {
  @Field()
  id: string;

  @Field()
  fullName: string;

  @Field()
  qualification: string;

  @Field(() => [String])
  skills: string[];

  @Field()
  experience: string;

  @Field()
  location: string;

  @Field(() => Recruiter, { nullable: true })
  recruiter: Recruiter;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => User, { nullable: true })
  user: User;
}
