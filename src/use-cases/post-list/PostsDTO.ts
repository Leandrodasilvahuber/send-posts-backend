export class PostDTO {
  public title: string
  public message: string
  id: any

  constructor (
    post: { id: number, title: string; message: string }
  ) {
    this.id = post.id
    this.title = post.title
    this.message = post.message
  }
}

export class PostsDTO {
  public posts: Array<PostDTO>

  constructor (
    posts: Array<PostDTO>
  ) {
    this.posts = posts
  }
}
