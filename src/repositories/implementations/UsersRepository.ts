/* eslint-disable no-useless-constructor */
import { UserMap } from '../../useCases/createUser/UserMap'
import { IUsersRepository } from '../IUsersRepository'

export class UsersRepository implements IUsersRepository {
  constructor (private model: any) {}

  public async save (user: any): Promise<void> {
    const data = UserMap.toPersistence(user)
    await this.model.create(data)
  }

  public async getUserByEmail (email: string): Promise<any> {
    return await this.model.findOne({ where: { email } })
  }
}
