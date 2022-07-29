import IUsersRepository from '../../repositories/IUsersRepository'
import IJWTProvider from '../../providers/IJWTProvider'
import IHashProvider from '../../providers/IhashProvider'

export default class LoginUseCase {
  private usersRepository: IUsersRepository
  private hashProvider: IHashProvider
  private jwtProvider: IJWTProvider

  constructor (
    usersRepository: IUsersRepository,
    hashProvider: IHashProvider,
    jwtProvider: IJWTProvider
  ) {
    this.usersRepository = usersRepository
    this.hashProvider = hashProvider
    this.jwtProvider = jwtProvider
  }

  async execute (data: any) {
    const hash = this.hashProvider.makesha256(data.password)

    const user = await this.usersRepository.getUserByEmail(data.email)

    if (!user || hash !== user.password) throw new Error('Login error.')

    return this.jwtProvider.makeToken(user.id)
  }
}
