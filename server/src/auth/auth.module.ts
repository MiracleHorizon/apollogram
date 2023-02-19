import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'

import { UserService } from '@user/user.service'
import { AuthService } from './auth.service'
import { AuthResolver } from './auth.resolver'
import { AccessTokenStrategy } from './strategies/access-token.strategy'
import { RefreshTokenStrategy } from './strategies/refresh-token.strategy'

@Module({
  imports: [JwtModule.register({})],
  providers: [
    AuthService,
    UserService,
    AuthResolver,
    RefreshTokenStrategy,
    AccessTokenStrategy
  ]
})
export class AuthModule {}
