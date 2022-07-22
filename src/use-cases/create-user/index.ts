import UsersRepository from '../../repositories/implementations/UsersRepository'
import CreateUserUseCase from './CreateUserUseCase'
import CreateUserController from './CreateUserController'
import DatabaseProvider from '../../providers/implementations/DatabaseProvider'
import sendEmailUseCase from '../send-email/index'
import HashProvider from '../../providers/implementations/HashProvider'
import CreateUserRequestRules from '../../request-rules/CreateUserRequestRules'

const connection = new DatabaseProvider().getConnection()
const usersRepository = new UsersRepository(connection.models.User)
const hashProvider = new HashProvider()
const createUserUseCase = new CreateUserUseCase(
  usersRepository,
  sendEmailUseCase,
  hashProvider
)
const createUserRequestRules = new CreateUserRequestRules()
const createUserController = new CreateUserController(createUserUseCase, createUserRequestRules)

export default createUserController
