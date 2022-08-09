import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateJobApplicationInput {
  @Field()
  @IsNotEmpty()
  jobId: string;

  @Field()
  @IsNotEmpty()
  profileId: string;

  @Field({ nullable: true })
  @IsNotEmpty()
  status: string;

  @Field({ nullable: true })
  @IsNotEmpty()
  @IsOptional()
  recruiterId: string;
}
