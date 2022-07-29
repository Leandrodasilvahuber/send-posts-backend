export default class UserDTO {
  public name: string
  public email: string

  constructor (name: string, email: string) {
    this.name = name
    this.email = email
  }
}
