import UserDTO from '../use-cases/create-user/UserDTO'

export default interface IUsersRepository {
    save(user: UserDTO): Promise<void>
    getUserByEmail(email: string): Promise<any>
}
