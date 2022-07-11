import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase'

export class CreateUserController {
  // eslint-disable-next-line no-useless-constructor
  constructor (private createUserUseCase: CreateUserUseCase) {}

  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const { name, email, password } = request.body
      const user = await this.createUserUseCase.execute({
        name,
        email,
        password
      })
      return response.status(201).send(user)
    } catch (err) {
      return response.status(400).send({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
