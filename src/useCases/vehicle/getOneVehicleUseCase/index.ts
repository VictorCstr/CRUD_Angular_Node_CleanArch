import { PostgresVehicleRepository } from "../../../repositories/PostgresVehicleRepository";
import { GetOneVehicleUseCase } from "./getOneVehicleUseCase";

//Repo
const vehicleRepository = new PostgresVehicleRepository();

//Inicializa o useCase
const getOneVehicleUseCase = new GetOneVehicleUseCase(vehicleRepository);

export { getOneVehicleUseCase };
