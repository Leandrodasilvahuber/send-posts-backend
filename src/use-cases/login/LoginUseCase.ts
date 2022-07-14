import { IUsersRepository } from '../../repositories/IUsersRepository'
import { JWTProvider } from '../../providers/implementations/JWTProvider'
import { IHashProvider } from '../../providers/IhashProvider'

export class LoginUseCase {
  private usersRepository: IUsersRepository
  private hashProvider: IHashProvider
  private jwtProvider: JWTProvider

  constructor (
    usersRepository: IUsersRepository,
    hashProvider: IHashProvider,
    jwtProvider: JWTProvider
  ) {
    this.usersRepository = usersRepository
    this.hashProvider = hashProvider
    this.jwtProvider = jwtProvider
  }

  async execute (data: any) {
    const hash = await this.hashProvider.makesha256(data.password)
    const user = await this.usersRepository.getUserByEmail(data.email)

    if (!user || hash !== user.password) throw new Error('Login error.')

    return this.jwtProvider.makeToken(user.id)
  }
}
