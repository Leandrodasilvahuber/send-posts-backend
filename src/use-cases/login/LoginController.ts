import { Request, Response } from 'express'
import { LoginUseCase } from './LoginUseCase'

export class LoginController {
  private loginUseCase: LoginUseCase

  constructor (loginUseCase: LoginUseCase) {
    this.loginUseCase = loginUseCase
  }

  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const { email, password } = request.body
      const token = await this.loginUseCase.execute({ email, password })
      return response.json({ auth: true, token })
    } catch (err) {
      return response.status(400).send({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
