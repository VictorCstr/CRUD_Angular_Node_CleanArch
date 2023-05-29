import { PostgresVehicleRepository } from "../../../repositories/PostgresVehicleRepository";
import { GetAllVehiclesUseCase } from "./getAllVehiclesUseCase";

//Repo
const vehicleRepository = new PostgresVehicleRepository();

//Inicializa o useCase
const getAllVehiclesUseCase = new GetAllVehiclesUseCase(vehicleRepository);

export { getAllVehiclesUseCase };
