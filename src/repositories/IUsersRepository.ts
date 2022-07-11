import { UserDTO } from '../useCases/createUser/UserDTO'

export interface IUsersRepository {
    save(user: UserDTO): Promise<void>
    getUserByEmail(email: string): Promise<any>
}
