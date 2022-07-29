
/* eslint-disable no-useless-constructor */
import PostMap from './PostMap'
import PostDTO from './PostDTO'
import IPostsRepository from '../../repositories/IPostsRepository'
import Post from './Post'

export default class DeletePostUseCase {
  constructor (
    private postsRepository: IPostsRepository
  ) {}

  async execute (data: Post): Promise<PostDTO> {
    const post = PostMap.toPersistence(data)

    const postNotExist = !(await this.postsRepository.findByIdAndUserId(post))
    if (postNotExist) throw new Error('Post not exists.')

    this.postsRepository.delete(post)
    return PostMap.toDTO(post)
  }
}
