import { Injectable, NotFoundException } from '@nestjs/common'
import { User } from '@prisma/client'
import * as bcrypt from 'bcrypt'

import { PrismaService } from 'prisma/prisma.service'
import { CreateUserInput } from './dto/create-user.input'
import { excludeEntityField } from '@utils/helpers/exclude-entity-field'

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  public async createOne(dto: CreateUserInput): Promise<User> {
    const hashedPassword = await bcrypt.hash(dto.password, 10)
    return this.prisma.user.create({
      data: {
        ...excludeEntityField(dto, ['password']),
        hashedPassword
      }
    })
  }

  public async findOne(userId: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId
      }
    })

    if (!user) {
      throw new NotFoundException('User is not found')
    }

    return user
  }

  public async isUserExistsById(id: string): Promise<boolean> {
    const user = await this.prisma.user.findUnique({
      where: {
        id
      }
    })

    return Boolean(user)
  }

  public async isUserExistsByEmail(email: string): Promise<boolean> {
    const user = await this.prisma.user.findUnique({
      where: {
        email
      }
    })

    return Boolean(user)
  }
}
