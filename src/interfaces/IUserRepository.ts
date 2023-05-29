import { User } from "../entities/User";

export interface IUserRepository {
  create(user: User): Promise<User>;
  userIsADM(username: string): Promise<User>;
  existUser(username: string): Promise<Boolean>;
}
