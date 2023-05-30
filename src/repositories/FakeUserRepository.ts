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
      password: "$2b$10$UKlKQ.d4Nz/gYl/qlxTC8uQE3L4jPYvLBXzQmS8ciLzB9AGqJ.y3G",
      role: "ADMIN" as Role,
    },
    {
      id: "2",
      name: "Usuario novo 2",
      user: "usuario2",
      password:
        "$2b$10$UKlKQ.d4Nz / gYl / qlxTC8uQE3L4jPYvLBXzQmS8ciLzB9AGqJ.y3G",
      role: "ADMIN" as Role,
    },
  ];

  async create(user: User): Promise<User> {
    user.password = await bcrypt.hash(user.password, 10);
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
      throw new ApiError(400, "Usuário não está cadastrado!");
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
