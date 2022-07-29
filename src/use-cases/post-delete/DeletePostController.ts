/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { NextFunction } from 'express-serve-static-core'
import DeletePostRequestRules from '../../request-rules/DeletePostRequestRules'
import DeletePostUseCase from './DeletePostUseCase'
import PostMap from './PostMap'

export default class DeletePostController {
  constructor (
    private deletePostUseCase: DeletePostUseCase,
    private deletePostRequestRules: DeletePostRequestRules
  ) {}

  async handle (request: Request, response: Response, next: NextFunction): Promise<Response> {
    try {
      const { id, userId } = request.body

      if (await this.deletePostRequestRules.execute({ id })) {
        throw new Error('Invalid data')
      }

      const post = PostMap.toDomain({ id, userId })

      const postDTO = await this.deletePostUseCase.execute(post)

      return response.status(201).send(postDTO)
    } catch (err) {
      next(err)
    }
  }
}
