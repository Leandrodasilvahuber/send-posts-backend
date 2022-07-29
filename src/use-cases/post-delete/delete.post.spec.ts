/* eslint-disable no-undef */
import PostsRepository from '../../repositories/implementations/PostsRepository'
import DeletePostUseCase from './DeletePostUseCase'

it('Post successfully created', async () => {
  jest.spyOn(PostsRepository.prototype, 'delete').mockImplementation(async (post) => {})

  jest.spyOn(PostsRepository.prototype, 'findByIdAndUserId').mockImplementation(async (post) => {
    return {}
  })

  const postsRepositoryMock = new PostsRepository({})
  const deletePostUseCase = new DeletePostUseCase(postsRepositoryMock)
  const postDTO = await deletePostUseCase.execute(
    {
      id: 1,
      userId: 1
    }
  )

  expect(postDTO.id).toBe(1)
})
