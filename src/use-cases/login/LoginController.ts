/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import LoginRequestRules from '../../request-rules/LoginRequestRules'
import LoginUseCase from './LoginUseCase'

export default class LoginController {
  constructor (
    private loginUseCase: LoginUseCase,
    private loginRequestRules: LoginRequestRules
  ) {}

  async handle (request: Request, response: Response, next): Promise<Response> {
    try {
      const { email, password } = request.body

      this.loginRequestRules.validate({ email, password })

      const token = await this.loginUseCase.execute({ email, password })

      return response.json({ auth: true, token })
    } catch (err) {
      next(err)
    }
  }
}
