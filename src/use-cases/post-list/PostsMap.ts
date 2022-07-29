import { PostDTO, PostsDTO } from './PostsDTO'
import Parameters from './Parameters'

export default class PostMap {
  public static toDomain (raw: any): Parameters {
    return new Parameters(raw.userId)
  }

  public static toDTO (posts: any[]): PostsDTO {
    const result = posts.map((post) => {
      return new PostDTO(post)
    })

    return new PostsDTO(result)
  }
}
