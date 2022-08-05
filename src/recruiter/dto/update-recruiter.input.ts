import { CreateRecruiterInput } from './create-recruiter.input';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRecruiterInput extends PartialType(CreateRecruiterInput) {}
