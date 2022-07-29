export default class Post {
  public userId: number
  public title: string
  public message: string

  constructor (
    userId: number,
    title: string,
    message: string
  ) {
    this.userId = userId
    this.title = title
    this.message = message
  }
}
