import HashProvider from '../../providers/implementations/HashProvider'
import JWTProvider from '../../providers/implementations/JWTProvider'
import DatabaseProvider from '../../providers/implementations/DatabaseProvider'
import UsersRepository from '../../repositories/implementations/UsersRepository'
import LoginController from './LoginController'
import LoginUseCase from './LoginUseCase'
import LoginRequestRules from '../../request-rules/LoginRequestRules'

const connection = new DatabaseProvider().getConnection()
const usersRepository = new UsersRepository(connection.models.User)
const hashProvider = new HashProvider()
const jwtProvider = new JWTProvider()
const loginRequestRules = new LoginRequestRules()
const loginUseCase = new LoginUseCase(
  usersRepository,
  hashProvider,
  jwtProvider
)
const loginController = new LoginController(loginUseCase, loginRequestRules)

export default loginController
