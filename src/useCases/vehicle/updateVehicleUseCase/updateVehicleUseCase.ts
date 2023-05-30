import { IUpdateVehicleDTO } from "./updateVehicleDTO";
import { ApiError } from "../../../errors";
import { Vehicle } from "../../../entities/Vehicle";
import { IVehicleRepository } from "../../../interfaces/IVehicleRepository";

export class UpdateVehicleUseCase {
  constructor(private vehicleRepository: IVehicleRepository) {}

  async execute(data: IUpdateVehicleDTO): Promise<Vehicle> {
    const { id, ano, chassi, marca, modelo, placa, renavam } = data;

    const existVehicle = await this.vehicleRepository.getOne(id);

    if (!existVehicle) throw new ApiError(400, "Veículo não localizado!");

    return await this.vehicleRepository.updateProject({
      id,
      ano,
      chassi,
      marca,
      modelo,
      placa,
      renavam,
    });
  }
}
