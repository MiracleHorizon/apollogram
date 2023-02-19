import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class UserEntity {
  @Field(() => ID)
  public id: string

  @Field()
  public email: string

  @Field()
  public login: string

  @Field()
  public phoneNumber: string

  @Field()
  public hashedPassword: string

  @Field(() => Date)
  public createdAt: Date

  @Field({ nullable: true })
  public hashedRefreshToken?: string

  @Field({ nullable: true })
  public avatar?: string
}
