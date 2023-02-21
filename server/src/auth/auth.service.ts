import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Response } from 'express'
import { User } from '@prisma/client'
import * as bcrypt from 'bcrypt'

import { PrismaService } from 'prisma/prisma.service'
import { UserService } from '@user/user.service'
import { CreateUserInput } from '@user/dto/create-user.input'
import { LoginInput } from '@auth/dto/login.input'
import { excludeEntityField } from '@utils/helpers/exclude-entity-field'
import type { JsonWebTokens } from './models/json-web-tokens'
import type { UserWithoutPrivateData } from './models/user-without-private-data'

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  public async registerLocal(
    dto: CreateUserInput,
    res: Response
  ): Promise<UserWithoutPrivateData> {
    const isUserExists = await this.userService.isUserExistsByEmail(dto.email)

    if (isUserExists) {
      throw new BadRequestException('User already exists')
    }

    const newUser = await this.userService.createOne(dto)
    return await this.handleUserTokensAndReturnUserToClient(newUser, res)
  }

  public async loginLocal(
    dto: LoginInput,
    res: Response
  ): Promise<UserWithoutPrivateData> {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email
      }
    })

    if (!user) {
      throw new NotFoundException('User is not found')
    }

    const isPasswordsMatch = await bcrypt.compare(
      dto.password,
      user.hashedPassword
    )

    if (!isPasswordsMatch) {
      throw new ForbiddenException('Access denied')
    }

    return await this.handleUserTokensAndReturnUserToClient(user, res)
  }

  public async logout(userId: string, res: Response): Promise<void> {
    await this.prisma.user.updateMany({
      where: {
        id: userId,
        hashedRefreshToken: {
          not: null
        }
      },
      data: {
        hashedRefreshToken: null
      }
    })

    res.clearCookie('refreshToken')
    res.clearCookie('accessToken')

    res.send({
      message: 'Successfully logged out'
    })
  }

  public async refresh(
    userId: string,
    refreshToken: string,
    res: Response
  ): Promise<UserWithoutPrivateData> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId
      }
    })

    if (!user) {
      throw new NotFoundException('User is not found')
    }

    if (!user.hashedRefreshToken) {
      throw new BadRequestException('Wrong credentials')
    }

    const isTokensMatches = await bcrypt.compare(
      refreshToken,
      user.hashedRefreshToken
    )

    if (!isTokensMatches) {
      throw new ForbiddenException('Bad credentials')
    }

    return await this.handleUserTokensAndReturnUserToClient(user, res)
  }

  private async handleUserTokensAndReturnUserToClient(
    user: User,
    res: Response
  ): Promise<any> {
    const { id, email } = user
    const tokens = await this.signTokens(id, email)
    await this.updateRefreshToken(id, tokens.refreshToken)

    res.cookie('accessToken', tokens.accessToken, { httpOnly: true })
    res.cookie('refreshToken', tokens.refreshToken, { httpOnly: true })

    return {
      ...excludeEntityField(user, ['hashedPassword', 'hashedRefreshToken'])
    }
  }

  private async signTokens(
    userId: string,
    email: string
  ): Promise<JsonWebTokens> {
    const tokenPayload = { sub: userId, email }

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(tokenPayload, {
        secret: process.env.ACCESS_TOKEN_SECRET,
        expiresIn: 60 * 15
      }),
      this.jwtService.signAsync(tokenPayload, {
        secret: process.env.REFRESH_TOKEN_SECRET,
        expiresIn: '30d'
      })
    ])

    return {
      accessToken,
      refreshToken
    }
  }

  private async updateRefreshToken(
    userId: string,
    refreshToken: string
  ): Promise<void> {
    const hashedRefreshToken = await bcrypt.hash(refreshToken, 10)
    await this.prisma.user.update({
      where: {
        id: userId
      },
      data: {
        hashedRefreshToken
      }
    })
  }
}
