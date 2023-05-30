import { ICreateVehicleDTO } from "./createVehicleDTO";
import { IUserRepository } from "../../../interfaces/IUserRepository";
import { ApiError } from "../../../errors";
import { IVehicleRepository } from "../../../interfaces/IVehicleRepository";
import { Vehicle } from "../../../entities/Vehicle";

export class CreateVehicleUseCase {
  constructor(private vehicleRepository: IVehicleRepository) {}

  async execute(data: ICreateVehicleDTO): Promise<Vehicle> {
    const { marca, modelo, ano, chassi, placa, renavam } = data;

    if (!ano || !chassi || !marca || !modelo || !placa || !renavam) {
      throw new ApiError(400, "Dados não informados pelo cliente");
    }

    if (renavam != undefined && renavam.length != 11) {
      throw new ApiError(
        400,
        "RENAVAM não possui o formato certo com 11 caracteres"
      );
    }
    if (chassi != undefined && chassi.length != 17) {
      throw new ApiError(
        400,
        "CHASSI não possui o formato certo com 17 caracteres"
      );
    }
    if (placa != undefined && placa.length != 7) {
      throw new ApiError(
        400,
        "PLACA não possui o formato certo com 7 caracteres"
      );
    }

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
