/* eslint-disable no-useless-constructor */
import { UserMap } from '../../useCases/createUser/UserMap'
import { UserDTO } from './UserDTO'
import { IUsersRepository } from '../../repositories/IUsersRepository'
import { IHashProvider } from '../../providers/IhashProvider'
import { ISendEmailUseCase } from '../sendEmail/ISendEmailUseCase'

export class CreateUserUseCase {
  constructor (
    private usersRepository: IUsersRepository,
    private sendEmailUseCase: ISendEmailUseCase,
    private hashProvider: IHashProvider
  ) {}

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
