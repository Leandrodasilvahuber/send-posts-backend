/* eslint-disable no-useless-constructor */
import PostMap from './PostMap'
import PostDTO from './PostDTO'
import IPostsRepository from '../../repositories/IPostsRepository'
import Post from './Post'

export default class CreatePostUseCase {
  constructor (
    private postsRepository: IPostsRepository
  ) {}

  async execute (data: Post): Promise<PostDTO> {
    const post = PostMap.toPersistence(data)
    this.postsRepository.save(post)
    return PostMap.toDTO(post)
  }
}
