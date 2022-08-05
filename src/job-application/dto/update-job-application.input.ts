import { CreateJobApplicationInput } from './create-job-application.input';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateJobApplicationInput extends PartialType(
  CreateJobApplicationInput,
) {}
