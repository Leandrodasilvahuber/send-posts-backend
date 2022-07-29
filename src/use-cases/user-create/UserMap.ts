import User from './User'
import UserDTO from './UserDTO'

export default class UserMap {
  public static toDomain (raw: any): User {
    return new User(raw.name, raw.email, raw.password)
  }

  public static toPersistence (user: User): any {
    return {
      name: user.name,
      email: user.email,
      password: user.password
    }
  }

  public static toDTO (user: User): UserDTO {
    return new UserDTO(user.name, user.email)
  }
}
