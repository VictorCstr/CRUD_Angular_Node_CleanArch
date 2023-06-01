import { IGetOneVehicleDTO } from "./getOneVehicleDTO";
import { IVehicleRepository } from "../../../interfaces/IVehicleRepository";
import { ApiError } from "../../../errors";
import { Vehicle } from "../../../entities/Vehicle";

export class GetOneVehicleUseCase {
  constructor(private vehicleRepository: IVehicleRepository) {}

  async execute(data: IGetOneVehicleDTO): Promise<Vehicle> {
    if (data.vehicleId == undefined || data.vehicleId == null) {
      throw new ApiError(400, "ID não fornecido!");
    }

    const { vehicleId } = data;

    const existVehicle = await this.vehicleRepository.getOne(vehicleId);

    if (!existVehicle) {
      throw new ApiError(400, "Veículo não localizado!");
    }

    return existVehicle;
  }
}
