import { Role } from "@prisma/client";
import { User } from "../entities/User";
import { IUserRepository } from "../interfaces/IUserRepository";
import bcrypt from "bcrypt";
import { ApiError } from "../errors";

export class FakeUserRepository implements IUserRepository {
  private users: User[] = [
    {
      id: "1",
      name: "Usuario novo 1",
      user: "usuario1",
      password: bcrypt.hash("teste", 10),
      role: "ADMIN" as Role,
    },
    {
      id: "2",
      name: "Usuario novo 2",
      user: "usuario2",
      password: bcrypt.hash("teste", 10),
      role: "ADMIN" as Role,
    },
  ];

  async create(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }

  async existUser(username: string): Promise<Boolean> {
    const user = this.users.find((user) => user.user == username);

    return !user ? false : true;
  }

  async login(username: string, password: string): Promise<string> {
    const user = this.users.find((user) => user.user == username);

    if (!user) {
      throw new ApiError(400, "User not exist");
    }

    if (await !bcrypt.compareSync(password, user.password)) {
      throw new ApiError(401, "Não autorizado!");
    }

    return "Autorizado";
  }

  async userIsADM(username: string): Promise<Boolean> {
    const user = this.users.find((user) => user.user == username);

    return user.role == "ADMIN" ? true : false;
  }
}
