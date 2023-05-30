import { User } from "../entities/User";

export interface IUserRepository {
  create(user: User): Promise<User>;
  userIsADM(username: string): Promise<Boolean>;
  login(username: string, password: string): Promise<string>;
  existUser(username: string): Promise<Boolean>;
}
