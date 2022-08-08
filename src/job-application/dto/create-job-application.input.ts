import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

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
}
