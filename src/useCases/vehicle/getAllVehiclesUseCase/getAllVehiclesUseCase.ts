import { IVehicleRepository } from "../../../interfaces/IVehicleRepository";
import { Vehicle } from "../../../entities/Vehicle";

export class GetAllVehiclesUseCase {
  constructor(private vehicleRepository: IVehicleRepository) {}

  async execute(): Promise<Vehicle[]> {
    return await this.vehicleRepository.getAll();
  }
}
