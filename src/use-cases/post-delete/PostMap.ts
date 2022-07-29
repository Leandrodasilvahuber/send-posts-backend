import Post from './Post'
import PostDTO from './PostDTO'

export default class PostMap {
  public static toDomain (raw: any): Post {
    return new Post(raw.id, raw.userId)
  }

  public static toPersistence (post: Post): any {
    return {
      id: post.id,
      user_id: post.userId
    }
  }

  public static toDTO (post: Post): PostDTO {
    return new PostDTO(post.id)
  }
}
