import { PostgresVehicleRepository } from "../../../repositories/PostgresVehicleRepository";
import { UpdateVehicleUseCase } from "./updateVehicleUseCase";

//Repo
const vehicleRepository = new PostgresVehicleRepository();

//Inicializa o useCase
const updateVehicleUseCase = new UpdateVehicleUseCase(vehicleRepository);

export { updateVehicleUseCase };
