import IUsersRepository from '../IUsersRepository'

export default class UsersRepository implements IUsersRepository {
  private model: any

  constructor (model: any) {
    this.model = model
  }

  public async save (user: any): Promise<void> {
    await this.model.create(user)
  }

  public async getUserByEmail (email: string): Promise<any> {
    return await this.model.findOne({ where: { email } })
  }
}
