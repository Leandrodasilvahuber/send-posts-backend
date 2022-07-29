import Post from './Post'
import PostDTO from './PostDTO'

export default class PostMap {
  public static toDomain (raw: any): Post {
    return new Post(raw.userId, raw.title, raw.message)
  }

  public static toPersistence (post: Post): any {
    return {
      user_id: post.userId,
      title: post.title,
      message: post.message
    }
  }

  public static toDTO (post: Post): PostDTO {
    return new PostDTO(post.title, post.message)
  }
}
