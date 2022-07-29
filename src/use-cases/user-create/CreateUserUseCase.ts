/* eslint-disable no-useless-constructor */
import UserMap from './UserMap'
import UserDTO from './UserDTO'
import IUsersRepository from '../../repositories/IUsersRepository'
import IHashProvider from '../../providers/IhashProvider'
import SendEmailUseCase from '../email-send/SendEmailUseCase'
import User from './User'

export default class CreateUserUseCase {
  constructor (
    private usersRepository: IUsersRepository,
    private sendEmailUseCase: SendEmailUseCase,
    private hashProvider: IHashProvider
  ) {}

  async execute (user: User): Promise<UserDTO> {
    const userAlreadyExists = await this.usersRepository.getUserByEmail(user.email)

    if (userAlreadyExists) throw new Error('User already exists.')

    user.password = this.hashProvider.makesha256(user.password)

    const data = UserMap.toPersistence(user)

    this.usersRepository.save(data)
    // this.sendEmailUseCase.execute(user)

    return UserMap.toDTO(user)
  }
}
