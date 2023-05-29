import { PostgresVehicleRepository } from "../../../repositories/PostgresVehicleRepository";
import { PostgresUserRepository } from "../../../repositories/PostgresUserRepository";
import { CreateVehicleUseCase } from "./createVehicleUseCase";

//Repo
const vehicleRepository = new PostgresVehicleRepository();
const userRepository = new PostgresUserRepository();

//Inicializa o useCase
const createVehicleUseCase = new CreateVehicleUseCase(
  vehicleRepository,
  userRepository
);

export { createVehicleUseCase };
