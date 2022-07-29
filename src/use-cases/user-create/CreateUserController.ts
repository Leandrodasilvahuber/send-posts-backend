/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { NextFunction } from 'express-serve-static-core'
import CreateUserRequestRules from '../../request-rules/CreateUserRequestRules'
import CreateUserUseCase from './CreateUserUseCase'
import UserMap from './UserMap'

export default class CreateUserController {
  constructor (
    private createUserUseCase: CreateUserUseCase,
    private createUserRequestRules: CreateUserRequestRules
  ) {}

  async handle (request: Request, response: Response, next: NextFunction): Promise<Response> {
    try {
      const { name, email, password } = request.body

      if (await this.createUserRequestRules.execute({ name, email, password })) {
        throw new Error('Invalid data')
      }

      const user = UserMap.toDomain({ name, email, password })

      const userDTO = await this.createUserUseCase.execute(user)

      return response.status(201).send(userDTO)
    } catch (err) {
      next(err)
    }
  }
}
