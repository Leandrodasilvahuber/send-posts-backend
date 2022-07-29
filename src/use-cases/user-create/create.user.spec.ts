/* eslint-disable no-undef */
import HashProvider from '../../providers/implementations/HashProvider'
import UsersRepository from '../../repositories/implementations/UsersRepository'
import SendEmailUseCase from '../email-send/SendEmailUseCase'
import CreateUserUseCase from './CreateUserUseCase'
import UserDTO from './UserDTO'

it('User successfully created', async () => {
  jest.spyOn(UsersRepository.prototype, 'getUserByEmail').mockImplementation(async (x:string):Promise<any> => {
    return await new Promise(function (resolve, reject) {
      resolve(null)
    })
  })

  jest.spyOn(UsersRepository.prototype, 'save').mockImplementation(async (user:UserDTO) => {

  })

  const mailProvider = null
  const hashProvider = new HashProvider()

  const sendEmailUseCase = new SendEmailUseCase(mailProvider, hashProvider)
  const usersRepositoryMock = new UsersRepository({})

  const createUserUseCase = new CreateUserUseCase(
    usersRepositoryMock,
    sendEmailUseCase,
    hashProvider
  )

  const userDTO = await createUserUseCase.execute(
    {
      name: 'test',
      email: 'test@test.com',
      password: 'password'
    }
  )

  expect(userDTO.email).toBe('test@test.com')
  expect(userDTO.name).toBe('test')
})

it('User already registered', async () => {
  jest.spyOn(UsersRepository.prototype, 'getUserByEmail').mockImplementation(async (x:string):Promise<any> => {
    return await new Promise(function (resolve, reject) {
      resolve(
        {
          id: 1,
          password: 'pizza',
          email: 'test@test.com'
        }
      )
    })
  })

  const mailProvider = null
  const hashProvider = new HashProvider()

  const sendEmailUseCase = new SendEmailUseCase(mailProvider, hashProvider)
  const usersRepositoryMock = new UsersRepository({})

  const createUserUseCase = new CreateUserUseCase(
    usersRepositoryMock,
    sendEmailUseCase,
    hashProvider
  )

  try {
    await createUserUseCase.execute({
      password: 'test',
      email: 'test@test.com',
      name: ''
    })
  } catch (error) {
    expect(error).toEqual(new Error('User already exists.'))
  }
})
