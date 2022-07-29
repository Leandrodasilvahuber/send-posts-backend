/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { NextFunction } from 'express-serve-static-core'
import ListPostsUseCase from './ListPostsUseCase'
import PostsMap from './PostsMap'

export default class ListPostsController {
  constructor (
    private listPostsUseCase: ListPostsUseCase
  ) {}

  async handle (request: Request, response: Response, next: NextFunction): Promise<Response> {
    try {
      const { userId } = request.body
      const parameters = PostsMap.toDomain(userId)
      const postsDTO = await this.listPostsUseCase.execute(parameters)

      return response.status(201).send(postsDTO.posts)
    } catch (err) {
      next(err)
    }
  }
}
