import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateRecruiterInput {
  @Field()
  @IsNotEmpty()
  role: string;

  @Field()
  @IsNotEmpty()
  companyName: string;
}
