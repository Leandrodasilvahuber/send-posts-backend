/* eslint-disable no-undef */
import HashProvider from '../../providers/implementations/HashProvider'
import JWTProvider from '../../providers/implementations/JWTProvider'
import UsersRepository from '../../repositories/implementations/UsersRepository'
import LoginUseCase from './LoginUseCase'

it('login successfully executed', async () => {
  const hashProvider = new HashProvider()

  const hashMock = 'hotel'

  jest.spyOn(UsersRepository.prototype, 'getUserByEmail').mockImplementation(async (x:string):Promise<any> => {
    return await new Promise(function (resolve, reject) {
      resolve(
        {
          id: 1,
          password: hashProvider.makesha256('pizza'),
          email: 'test@test.com'
        }
      )
    })
  })

  jest.spyOn(JWTProvider.prototype, 'makeToken').mockImplementation((id:number):string => {
    return hashMock
  })

  const jwtProviderMock = new JWTProvider()
  const usersRepositoryMock = new UsersRepository({})

  const loginUseCase = new LoginUseCase(
    usersRepositoryMock,
    hashProvider,
    jwtProviderMock
  )

  const token = await loginUseCase.execute({ password: 'pizza', email: 'test@test.com' })

  expect(token).toBe(hashMock)
})

it('login invalid password', async () => {
  const hashProvider = new HashProvider()

  jest.spyOn(UsersRepository.prototype, 'getUserByEmail').mockImplementation(async (x:string):Promise<any> => {
    return await new Promise(function (resolve, reject) {
      resolve(
        {
          id: 1,
          password: hashProvider.makesha256('pizza'),
          email: 'test@test.com'
        }
      )
    })
  })

  const jwtProviderMock = new JWTProvider()
  const usersRepositoryMock = new UsersRepository({})

  const loginUseCase = new LoginUseCase(
    usersRepositoryMock,
    hashProvider,
    jwtProviderMock
  )

  try {
    await loginUseCase.execute({ password: 'hotel', email: 'test@test.com' })
  } catch (error) {
    expect(error).toEqual(new Error('Login error.'))
  }
})

it('login invalid email', async () => {
  jest.spyOn(UsersRepository.prototype, 'getUserByEmail').mockImplementation(async (x:string):Promise<any> => {
    return await new Promise(function (resolve, reject) {
      resolve(null)
    })
  })

  const jwtProviderMock = new JWTProvider()
  const usersRepositoryMock = new UsersRepository({})
  const hashProvider = new HashProvider()

  const loginUseCase = new LoginUseCase(
    usersRepositoryMock,
    hashProvider,
    jwtProviderMock
  )

  try {
    await loginUseCase.execute({ password: 'test', email: 'test@test.com' })
  } catch (error) {
    expect(error).toEqual(new Error('Login error.'))
  }
})
