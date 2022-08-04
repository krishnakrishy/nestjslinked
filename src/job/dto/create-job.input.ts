import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

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
  date: Date;

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
  lastDate: Date;

  @Field()
  @IsNotEmpty()
  skill: string;

  @Field()
  @IsNotEmpty()
  experience: string;

  // @Field()
  // @IsNotEmpty()
  // createdBy: string;
}
