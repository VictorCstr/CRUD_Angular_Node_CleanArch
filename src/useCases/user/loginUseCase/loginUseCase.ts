import { ILoginDTO } from "./loginDTO";
import { IUserRepository } from "../../../interfaces/IUserRepository";

export class LoginUseCase {
  constructor(private projectRepository: IUserRepository) {}

  async execute(data: ILoginDTO): Promise<string> {
    const { password, user } = data;

    return await this.projectRepository.login(user, password);
  }
}
