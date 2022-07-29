import PostRepository from '../../repositories/implementations/PostsRepository'
import DeletePostUseCase from './DeletePostUseCase'
import DeletePostController from './DeletePostController'
import DatabaseProvider from '../../providers/implementations/DatabaseProvider'
import DeletePostRequestRules from '../../request-rules/DeletePostRequestRules'

const connection = new DatabaseProvider().getConnection()
const postsRepository = new PostRepository(connection.models.Post)
const deletePostUseCase = new DeletePostUseCase(postsRepository)
const deletePostRequestRules = new DeletePostRequestRules()
const deletePostController = new DeletePostController(deletePostUseCase, deletePostRequestRules)

export default deletePostController
