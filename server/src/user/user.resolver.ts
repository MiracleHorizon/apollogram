import { Query, Resolver, Args } from '@nestjs/graphql'

import { UserService } from './user.service'
import { UserEntity } from './entities/user.entity'

@Resolver(() => UserEntity)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => UserEntity, { name: 'findOneUser' })
  public findOne(@Args('id') id: string) {
    return this.userService.findOne(id)
  }
}
