import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsPhoneNumber } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsNotEmpty()
  userName: string;

  @Field()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty()
  password: string;

  @Field()
  @IsNotEmpty()
  @IsPhoneNumber("IN")
  mobile: string;
}
