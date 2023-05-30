import { PostgresUserRepository } from "../../../repositories/PostgresUserRepository";
import { LoginUseCase } from "./loginUseCase";

//Repo
const userRepository = new PostgresUserRepository();

//Inicializa o useCase
const loginUseCase = new LoginUseCase(userRepository);

export { loginUseCase };
