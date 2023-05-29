import { ICreateVehicleDTO } from "./createVehicleDTO";
import { IUserRepository } from "../../../interfaces/IUserRepository";
import { ApiError } from "../../../errors";
import { IVehicleRepository } from "../../../interfaces/IVehicleRepository";
import { Vehicle } from "../../../entities/Vehicle";

export class CreateVehicleUseCase {
  constructor(
    private vehicleRepository: IVehicleRepository,
    private userRepository: IUserRepository
  ) {}

  async execute(data: ICreateVehicleDTO): Promise<Vehicle> {
    const { marca, modelo, ano, chassi, placa, renavam } = data;

    const vehicle = new Vehicle({
      marca,
      modelo,
      ano,
      chassi,
      placa,
      renavam,
    });

    return await this.vehicleRepository.create(vehicle);
  }
}
