import { AuthGuard } from '@nestjs/passport'
import { GqlExecutionContext } from '@nestjs/graphql'
import type { ExecutionContext } from '@nestjs/common'
import type { Request } from 'express'

import type { GraphqlRequestCtx } from '@guards/graphql-request-ctx'

export class JwtGuard extends AuthGuard('jwt') implements GraphqlRequestCtx {
  public getRequest(context: ExecutionContext): Request {
    const ctx = GqlExecutionContext.create(context)
    return ctx.getContext().req
  }
}
