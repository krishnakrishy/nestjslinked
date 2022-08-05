import { Field, ID, ObjectType } from "@nestjs/graphql";
import { User } from "src/user/user.model";

@ObjectType()
export class Profile {
    @Field()
    id: string;

    @Field()
    fullName: string;

    @Field()
    qualification: string;

    @Field(() => [String])
    skills: string[];

    @Field()
    experience: string;

    @Field()
    location: string;

    // @Field()
    // recruiter: Recruiter;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;

    @Field(() => User, { nullable: true })
    user: User;

}