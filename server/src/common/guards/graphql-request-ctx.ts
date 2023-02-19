import type { ExecutionContext } from '@nestjs/common'
import type { Request } from 'express'

export interface GraphqlRequestCtx {
  getRequest: (context: ExecutionContext) => Request
}
