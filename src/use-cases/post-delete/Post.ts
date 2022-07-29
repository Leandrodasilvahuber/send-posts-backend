export default class Post {
  public id: number
  public userId: number

  constructor (
    id: number,
    userId: number
  ) {
    this.id = id
    this.userId = userId
  }
}
