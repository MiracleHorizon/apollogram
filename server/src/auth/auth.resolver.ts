import { UseGuards } from '@nestjs/common'
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql'
import { Request, Response } from 'express'

import { AuthService } from './auth.service'
import { JwtGuard } from '@guards/jwt.guard'
import { JwtRefreshGuard } from '@guards/jwt-refresh.guard'
import { LoginInput } from './dto/login.input'
import { CreateUserInput } from '@user/dto/create-user.input'
import { UserEntity } from '@user/entities/user.entity'
import { Void } from '@graphql/scalar-types/void'
import type { JwtPayload } from './models/jwt-payload'

@Resolver(() => UserEntity)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => UserEntity)
  public registerLocal(
    @Args('dto') dto: CreateUserInput,
    @Context() { res }: { res: Response }
  ) {
    return this.authService.registerLocal(dto, res)
  }

  @Mutation(() => UserEntity)
  public loginLocal(
    @Args('dto') dto: LoginInput,
    @Context() { res }: { res: Response }
  ) {
    return this.authService.loginLocal(dto, res)
  }

  @UseGuards(JwtGuard)
  @Mutation(() => Void)
  public logout(@Context() { req, res }: { req: Request; res: Response }) {
    const userPayload = req.user as JwtPayload
    return this.authService.logout(userPayload.sub, res)
  }

  @UseGuards(JwtRefreshGuard)
  @Mutation(() => UserEntity)
  public refresh(@Context() { req, res }: { req: Request; res: Response }) {
    const userPayload = req.user as JwtPayload
    const refreshToken = req.cookies.refreshToken
    return this.authService.refresh(userPayload.sub, refreshToken, res)
  }
}
