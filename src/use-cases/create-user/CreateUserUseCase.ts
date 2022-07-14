import { UserMap } from './UserMap'
import { UserDTO } from './UserDTO'
import { IUsersRepository } from '../../repositories/IUsersRepository'
import { IHashProvider } from '../../providers/IhashProvider'
import { ISendEmailUseCase } from '../send-email/ISendEmailUseCase'

export class CreateUserUseCase {
  private usersRepository: IUsersRepository
  private sendEmailUseCase: ISendEmailUseCase
  private hashProvider: IHashProvider

  constructor (
    usersRepository: IUsersRepository,
    sendEmailUseCase: ISendEmailUseCase,
    hashProvider: IHashProvider
  ) {
    this.usersRepository = usersRepository
    this.sendEmailUseCase = sendEmailUseCase
    this.hashProvider = hashProvider
  }

  async execute (data: any): Promise<UserDTO> {
    const userAlreadyExists = await this.usersRepository.getUserByEmail(
      data.email
    )
    if (userAlreadyExists) throw new Error('User already exists.')

    const user = UserMap.toDomain(data)
    user.password = this.hashProvider.makesha256(user.password)
    this.usersRepository.save(user)

    // this.sendEmailUseCase.execute(user)

    return UserMap.toDTO(user)
  }
}
