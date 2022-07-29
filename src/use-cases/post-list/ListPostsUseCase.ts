/* eslint-disable no-useless-constructor */
import PostsMap from './PostsMap'
import { PostsDTO } from './PostsDTO'
import IPostsRepository from '../../repositories/IPostsRepository'
import Parameters from './Parameters'

export default class CreatePostUseCase {
  constructor (
    private postsRepository: IPostsRepository
  ) {}

  async execute (parametters: Parameters): Promise<PostsDTO> {
    const posts = await this.postsRepository.findByUserId(parametters.userId)
    return PostsMap.toDTO(posts)
  }
}
