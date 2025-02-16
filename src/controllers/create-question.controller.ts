import { Controller, HttpCode, Post, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { CurrentUser } from 'src/auth/current-user-decorator'
import { UserPayload } from 'src/auth/jwt.strategy'

@Controller('/questions')
export class CreateQuestionController {
  constructor() {}

  @Post()
  @HttpCode(201)
  @UseGuards(AuthGuard('jwt'))
  async handle(@CurrentUser() user: UserPayload) {
    return user.sub
  }
}
