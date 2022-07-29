/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { NextFunction } from 'express-serve-static-core'
import CreatePostRequestRules from '../../request-rules/CreatePostRequestRules'
import CreatePostUseCase from './CreatePostUseCase'
import PostMap from './PostMap'

export default class CreatePostController {
  constructor (
    private createPostUseCase: CreatePostUseCase,
    private createPostRequestRules: CreatePostRequestRules
  ) {}

  async handle (request: Request, response: Response, next: NextFunction): Promise<Response> {
    try {
      const { title, message, userId } = request.body

      if (await this.createPostRequestRules.execute({ title, message })) {
        throw new Error('Invalid data')
      }

      const post = PostMap.toDomain({ userId, title, message })

      const postDTO = await this.createPostUseCase.execute(post)

      return response.status(201).send(postDTO)
    } catch (err) {
      next(err)
    }
  }
}
