import PostRepository from '../../repositories/implementations/PostsRepository'
import CreatePostUseCase from './CreatePostUseCase'
import CreatePostController from './CreatePostController'
import DatabaseProvider from '../../providers/implementations/DatabaseProvider'
import CreatePostRequestRules from '../../request-rules/CreatePostRequestRules'

const connection = new DatabaseProvider().getConnection()
const postsRepository = new PostRepository(connection.models.Post)
const createPostUseCase = new CreatePostUseCase(postsRepository)
const createPostRequestRules = new CreatePostRequestRules()
const createPostController = new CreatePostController(createPostUseCase, createPostRequestRules)

export default createPostController
