import { ICreateUserDTO } from "./createUserDTO";
import { IUserRepository } from "../../../interfaces/IUserRepository";
import { Role, User } from "../../../entities/User";
import { ApiError } from "../../../errors";

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: ICreateUserDTO): Promise<User> {
    const { name, password, user } = data;

    const existUser = await this.userRepository.existUser(user);

    if (existUser == true) {
      throw new ApiError(400, "O usuario já existe");
    }

    const newUser = new User({
      name,
      password,
      user,
      role: "ADMIN",
    });

    return await this.userRepository.create(newUser);
  }
}
