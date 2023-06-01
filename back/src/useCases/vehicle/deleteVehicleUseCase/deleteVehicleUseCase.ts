import { IDeleteVehicleDTO } from "./deleteVehicleDTO";
import { IVehicleRepository } from "../../../interfaces/IVehicleRepository";
import { ApiError } from "../../../errors";
import { Vehicle } from "../../../entities/Vehicle";

export class DeleteVehicleUseCase {
  constructor(private vehicleRepository: IVehicleRepository) {}

  async execute(data: IDeleteVehicleDTO): Promise<Boolean> {
    const { vehicleId } = data;

    if (!vehicleId) {
      throw new ApiError(400, "Dados não informados pelo cliente");
    }

    const existVehicle = await this.vehicleRepository.getOne(vehicleId);

    if (!existVehicle) {
      throw new ApiError(400, "Veículo não localizado!");
    }

    return await this.vehicleRepository.delete(vehicleId);
  }
}
