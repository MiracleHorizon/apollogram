import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'

import { PrismaModule } from 'prisma/prisma.module'
import { AuthModule } from '@auth/auth.module'
import { UserModule } from '@user/user.module'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      context: ({ req, res }) => ({ req, res }),
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      cors: {
        origin: process.env.CLIENT_API,
        credentials: true
      }
    }),
    PrismaModule,
    AuthModule,
    UserModule
  ]
})
export class AppModule {}
