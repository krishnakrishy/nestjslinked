import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateProfileInput {
  //class validator
  @Field()
  @IsNotEmpty()
  fullName: string;

  @Field()
  @IsNotEmpty()
  qualification: string;

  @Field(() => [String])
  @IsNotEmpty()
  skills: string[];

  @Field()
  @IsNotEmpty()
  experience: string;

  @Field()
  @IsNotEmpty()
  location: string;

  // @Field()
  // recruiterId: string;

  @Field()
  @IsNotEmpty()
  userId: string;

  // @Field()
  // recruiterId: string;
}
