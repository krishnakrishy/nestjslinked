import { InputType, Field } from '@nestjs/graphql';
import { isEmpty, IsNotEmpty, IsOptional } from 'class-validator';
import { isNullableType } from 'graphql';

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

  @Field({ nullable: true })
  @IsNotEmpty()
  @IsOptional()
  recruiterId: string;

  @Field()
  @IsNotEmpty()
  userId: string;
}
