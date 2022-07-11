import { UsersRepository } from '../../repositories/implementations/UsersRepository'
import { CreateUserUseCase } from './CreateUserUseCase'
import { CreateUserController } from './CreateUserController'
import { DatabaseProvider } from '../../providers/implementations/DatabaseProvider'
import { sendEmailUseCase } from '../sendEmail/index'
import { HashProvider } from '../../providers/implementations/HashProvider'

const connection = new DatabaseProvider().getConnection()
const usersRepository = new UsersRepository(connection.models.User)
const hashProvider = new HashProvider()
const createUserUseCase = new CreateUserUseCase(
  usersRepository,
  sendEmailUseCase,
  hashProvider
)
const createUserController = new CreateUserController(createUserUseCase)

export { createUserController }
