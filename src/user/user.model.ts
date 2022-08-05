import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

import { Profile } from 'src/profile/profile.model';

@ObjectType()
export class User {
  @Field()
  id: string;

  @Field()
  userName: string;

  @Field()
  email: string;

  @Field()
  mobile: string;

  @Field(() => Profile)
  profile: Profile;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
