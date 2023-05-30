import { ILoginDTO } from "./loginDTO";
import { IUserRepository } from "../../../interfaces/IUserRepository";
import { ApiError } from "../../../errors";

export class LoginUseCase {
  constructor(private projectRepository: IUserRepository) {}

  async execute(data: ILoginDTO): Promise<string> {
    const { password, user } = data;

    if (!password || !user) {
      throw new ApiError(400, "Dados não informados pelo cliente");
    }

    return await this.projectRepository.login(user, password);
  }
}
