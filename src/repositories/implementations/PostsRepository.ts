import IPostsRepository from '../IPostsRepository'

export default class PostsRepository implements IPostsRepository {
  private model: any

  constructor (model: any) {
    this.model = model
  }

  public async delete (post: any): Promise<void> {
    await this.model.destroy({
      where: post
    })
  }

  public async save (post: any): Promise<void> {
    await this.model.create(post)
  }

  public async findByUserId (userId: number):Promise<any> {
    return await this.model.findAll({ where: { user_id: userId } })
  }

  public async findByIdAndUserId (post: any):Promise<any> {
    return await this.model.findOne({ where: post })
  }
}
