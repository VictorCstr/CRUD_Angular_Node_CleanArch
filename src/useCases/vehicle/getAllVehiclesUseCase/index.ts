import { PostgresVehicleRepository } from "../../../repositories/PostgresProjectRepository";
import { GetAllVehiclesUseCase } from "./getAllVehiclesUseCase";

//Repo
const vehicleRepository = new PostgresVehicleRepository();

//Inicializa o useCase
const getAllVehiclesUseCase = new GetAllVehiclesUseCase(vehicleRepository);

export { getAllVehiclesUseCase };
