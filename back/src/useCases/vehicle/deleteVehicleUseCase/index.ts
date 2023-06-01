import { PostgresVehicleRepository } from "../../../repositories/PostgresVehicleRepository";
import { DeleteVehicleUseCase } from "./deleteVehicleUseCase";

//Repo
const vehicleRepository = new PostgresVehicleRepository();

//Inicializa o useCase
const deleteVehicleUseCase = new DeleteVehicleUseCase(vehicleRepository);

export { deleteVehicleUseCase };
