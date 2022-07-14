import { UserMap } from '../../use-cases/create-user/UserMap'
import { IUsersRepository } from '../IUsersRepository'

export class UsersRepository implements IUsersRepository {
  private model: any

  constructor (model: any) {
    this.model = model
  }

  public async save (user: any): Promise<void> {
    const data = UserMap.toPersistence(user)
    await this.model.create(data)
  }

  public async getUserByEmail (email: string): Promise<any> {
    return await this.model.findOne({ where: { email } })
  }
}
