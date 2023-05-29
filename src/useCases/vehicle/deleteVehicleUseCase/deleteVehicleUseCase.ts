import { IDeleteVehicleDTO } from "./deleteVehicleDTO";
import { IVehicleRepository } from "../../../interfaces/IVehicleRepository";
import { ApiError } from "../../../errors";
import { Vehicle } from "../../../entities/Vehicle";

export class DeleteVehicleUseCase {
  constructor(private vehicleRepository: IVehicleRepository) {}

  async execute(data: IDeleteVehicleDTO): Promise<Boolean> {
    const { vehicleId, placa } = data;

    const existVehicle = await this.vehicleRepository.getOne(vehicleId, placa);

    if (!existVehicle) throw new ApiError(400, "Veículo não localizado!");

    return await this.vehicleRepository.delete(vehicleId, placa);
  }
}
