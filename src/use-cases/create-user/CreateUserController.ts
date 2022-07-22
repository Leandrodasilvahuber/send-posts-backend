/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { NextFunction } from 'express-serve-static-core'
import CreateUserRequestRules from '../../request-rules/CreateUserRequestRules'
import CreateUserUseCase from './CreateUserUseCase'

export default class CreateUserController {
  constructor (
    private createUserUseCase: CreateUserUseCase,
    private createUserRequestRules: CreateUserRequestRules
  ) {}

  async handle (request: Request, response: Response, next: NextFunction): Promise<Response> {
    try {
      const { name, email, password } = request.body

      this.createUserRequestRules.validate({ name, email, password })

      const user = await this.createUserUseCase.execute({
        name,
        email,
        password
      })
      return response.status(201).send(user)
    } catch (err) {
      next(err)
    }
  }
}
