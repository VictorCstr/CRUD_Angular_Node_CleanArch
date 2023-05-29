import { PrismaClient } from "@prisma/client";
import { IUserRepository } from "../interfaces/IUserRepository";
import { User } from "../entities/User";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export class PostgresUserRepository implements IUserRepository {
  constructor() {}

  async create(user: User): Promise<User> {
    try {
      throw new Error("Method not implemented yet");
    } catch (error) {
      throw new Error("failed to save user on postgres");
    }
  }
  async existUser(username: string): Promise<Boolean> {
    try {
      throw new Error("Method not implemented yet");
    } catch (error) {
      throw new Error("failed to find user on postgres");
    }
  }
  async userIsADM(username: string): Promise<User> {
    try {
      throw new Error("Method not implemented yet");
    } catch (error) {
      throw new Error("failed to check if user is adm on postgres");
    }
  }
}
