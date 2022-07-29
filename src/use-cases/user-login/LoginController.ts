/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { NextFunction } from 'express-serve-static-core'
import LoginRequestRules from '../../request-rules/LoginRequestRules'
import LoginUseCase from './LoginUseCase'

export default class LoginController {
  constructor (
    private loginUseCase: LoginUseCase,
    private loginRequestRules: LoginRequestRules
  ) {}

  async handle (request: Request, response: Response, next: NextFunction): Promise<Response> {
    try {
      const { email, password } = request.body

      if (await this.loginRequestRules.execute({ email, password })) {
        throw new Error('Invalid data')
      }

      const token = await this.loginUseCase.execute({ email, password })

      return response.json({ auth: true, token })
    } catch (err) {
      next(err)
    }
  }
}
