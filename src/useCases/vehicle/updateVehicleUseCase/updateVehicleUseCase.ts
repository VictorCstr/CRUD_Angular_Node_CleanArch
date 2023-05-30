import { IUpdateVehicleDTO } from "./updateVehicleDTO";
import { ApiError } from "../../../errors";
import { Vehicle } from "../../../entities/Vehicle";
import { IVehicleRepository } from "../../../interfaces/IVehicleRepository";

export class UpdateVehicleUseCase {
  constructor(private vehicleRepository: IVehicleRepository) {}

  async execute(data: IUpdateVehicleDTO): Promise<Vehicle> {
    const { id, ano, chassi, marca, modelo, placa, renavam } = data;

    if (!id || !ano || !chassi || !marca || !modelo || !placa || !renavam) {
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
