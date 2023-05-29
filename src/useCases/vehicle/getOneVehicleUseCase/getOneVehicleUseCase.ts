import { IGetOneVehicleDTO } from "./getOneVehicleDTO";
import { IVehicleRepository } from "../../../interfaces/IVehicleRepository";
import { ApiError } from "../../../errors";
import { Vehicle } from "../../../entities/Vehicle";

export class GetOneVehicleUseCase {
  constructor(private vehicleRepository: IVehicleRepository) {}

  async execute(data: IGetOneVehicleDTO): Promise<Vehicle> {
    const { placa, vehicleId } = data;

    const existProject = await this.vehicleRepository.getOne(vehicleId, placa);

    if (!existProject) throw new ApiError(400, "Veículo não localizado!");

    return existProject;
  }
}
