import PostRepository from '../../repositories/implementations/PostsRepository'
import ListPostsUseCase from './ListPostsUseCase'
import ListPostsController from './ListPostsController'
import DatabaseProvider from '../../providers/implementations/DatabaseProvider'

const connection = new DatabaseProvider().getConnection()
const postsRepository = new PostRepository(connection.models.Post)
const listPostsUseCase = new ListPostsUseCase(postsRepository)
const listPostsController = new ListPostsController(listPostsUseCase)

export default listPostsController
