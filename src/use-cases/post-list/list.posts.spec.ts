/* eslint-disable no-undef */
import PostsRepository from '../../repositories/implementations/PostsRepository'
import ListPostsUseCase from './ListPostsUseCase'

it('Posts list successfully', async () => {
  jest.spyOn(PostsRepository.prototype, 'findByUserId').mockImplementation(async (post) => {
    return [{
      title: 'Title',
      message: 'Message'
    }]
  })

  jest.spyOn(PostsRepository.prototype, 'findByIdAndUserId').mockImplementation(async (post) => {
    return {}
  })

  const postsRepositoryMock = new PostsRepository({})
  const listPostUseCase = new ListPostsUseCase(postsRepositoryMock)
  const postsDTO = await listPostUseCase.execute({ userId: 1 })

  expect(postsDTO.posts[0].title).toBe('Title')
  expect(postsDTO.posts[0].message).toBe('Message')
})
