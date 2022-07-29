/* eslint-disable no-undef */
import PostsRepository from '../../repositories/implementations/PostsRepository'
import CreatePostUseCase from './CreatePostUseCase'
import PostDTO from './PostDTO'

it('Post successfully created', async () => {
  jest.spyOn(PostsRepository.prototype, 'save').mockImplementation(async (post:PostDTO) => {})

  const postsRepositoryMock = new PostsRepository({})
  const createPostUseCase = new CreatePostUseCase(postsRepositoryMock)
  const postDTO = await createPostUseCase.execute(
    {
      userId: 1,
      title: 'Title',
      message: 'Message'
    }
  )

  expect(postDTO.title).toBe('Title')
  expect(postDTO.message).toBe('Message')
})
