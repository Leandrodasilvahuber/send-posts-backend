import UserDTO from '../use-cases/user-create/UserDTO'

export default interface IUsersRepository {
    save(user: UserDTO): Promise<void>
    getUserByEmail(email: string): Promise<any>
}
