import { PrismaClient } from "@prisma/client";
import { IUserRepository } from "../interfaces/IUserRepository";
import { User } from "../entities/User";
import bcrypt from "bcrypt";
import { ApiError } from "../errors";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export class PostgresUserRepository implements IUserRepository {
  constructor() {}

  async create(userData: User): Promise<User> {
    try {
      const { id, name, password, user, role } = userData;

      const passHash = await bcrypt.hash(password, 10);

      const userCreated = await prisma.user.create({
        data: {
          id,
          name,
          password: passHash,
          user,
          role,
        },
      });

      return userCreated;
    } catch (error) {
      console.log(error);
      throw new ApiError(400, error);
    }
  }
  async existUser(username: string): Promise<Boolean> {
    try {
      const user = await prisma.user.findUnique({
        where: {
          user: username,
        },
      });
      return user ? true : false;
    } catch (error) {
      console.log(error);
      throw new ApiError(400, error);
    }
  }
  async userIsADM(username: string): Promise<boolean> {
    try {
      const user = await prisma.user.findUnique({
        where: {
          user: username,
        },
      });
      return user.role == "ADMIN" ? true : false;
    } catch (error) {
      console.log(error);
      throw new ApiError(400, error);
    }
  }
  async login(username: string, password: string): Promise<string> {
    try {
      const user = await prisma.user.findUnique({
        where: {
          user: username,
        },
      });

      if (!user) {
        throw new ApiError(400, "Usuário não está cadastrado!");
      }

      if (await !bcrypt.compareSync(password, user.password)) {
        throw new ApiError(401, "Não autorizado!");
      }

      const token = jwt.sign(
        {
          id: user.id,
          user: user.user,
          nome: user.name,
        },
        process.env.SECRET_KEY,
        {
          expiresIn: 300,
        }
      );
      return token;
    } catch (error) {
      console.log(error);
      throw new ApiError(400, error);
    }
  }
}
