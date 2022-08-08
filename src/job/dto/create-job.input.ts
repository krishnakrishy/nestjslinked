import { InputType, Field } from '@nestjs/graphql';
import { IsDate, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateJobInput {
  @Field()
  @IsNotEmpty()
  title: string;

  @Field()
  @IsNotEmpty()
  companyName: string;

  @Field()
  @IsNotEmpty()
  description: string;

  @Field()
  @IsNotEmpty()
  opening: string;

  @Field()
  @IsNotEmpty()
  location: string;

  @Field()
  @IsNotEmpty()
  salary: string;

  @Field()
  @IsNotEmpty()
  @IsDate()
  lastDate: Date;

  @Field()
  @IsNotEmpty()
  skill: string;

  @Field()
  @IsNotEmpty()
  experience: string;

  @Field()
  @IsNotEmpty()
  profileId: string;
}
