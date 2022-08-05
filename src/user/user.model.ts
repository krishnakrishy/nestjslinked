import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  userName: string;

  @Field()
  email: string;

  @Field()
  mobile: string;

  // @Field(() => Profile)
  //profile: Profile;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
