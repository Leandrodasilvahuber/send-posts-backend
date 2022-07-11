/* eslint-disable no-useless-constructor */
import { IUsersRepository } from '../../repositories/IUsersRepository'
import { JWTProvider } from '../../providers/implementations/JWTProvider'
import { IHashProvider } from '../../providers/IhashProvider'

export class LoginUseCase {
  constructor (
    private usersRepository: IUsersRepository,
    private hashProvider: IHashProvider,
    private jwtProvider: JWTProvider
  ) {}

  async execute (data: any) {
    const hash = await this.hashProvider.makesha256(data.password)
    const user = await this.usersRepository.getUserByEmail(data.email)

    if (!user || hash !== user.password) throw new Error('Login error.')

    return this.jwtProvider.makeToken(user.id)
  }
}
