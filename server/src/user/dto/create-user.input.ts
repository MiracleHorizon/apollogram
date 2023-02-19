import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateUserInput {
  @Field()
  public login: string

  @Field()
  public email: string

  @Field()
  public password: string

  @Field()
  public phoneNumber: string
}
