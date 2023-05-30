import { PrismaClient } from "@prisma/client";
import { ApiError } from "../errors";
import { IVehicleRepository } from "../interfaces/IVehicleRepository";
import { Vehicle } from "../entities/Vehicle";

const prisma = new PrismaClient();

export class PostgresVehicleRepository implements IVehicleRepository {
  constructor() {}

  async create(vehicle: Vehicle): Promise<Vehicle> {
    try {
      const { id, ano, chassi, marca, modelo, placa, renavam } = vehicle;

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

      return await prisma.vehicle.create({
        data: {
          id,
          chassi,
          marca,
          modelo,
          placa,
          renavam,
          ano,
        },
      });
    } catch (error) {
      console.log(error.code);
      if (error.code === "P2002") {
        throw new ApiError(400, "Este carro já existe");
      } else {
        throw new ApiError(400, error);
      }
    }
  }

  async getAll(): Promise<Vehicle[]> {
    try {
      return await prisma.vehicle.findMany();
    } catch (error) {
      console.log(error);
      throw new Error("failed searching all vehicles on postgres");
    }
  }

  async getOne(vehicleId: string): Promise<Vehicle> {
    try {
      return await prisma.vehicle.findFirst({
        where: {
          id: vehicleId,
        },
      });
    } catch (error) {
      console.log(error);
      throw new ApiError(400, error);
    }
  }

  async updateProject(vehicle: Vehicle): Promise<Vehicle> {
    try {
      const { id, ano, chassi, marca, modelo, placa, renavam } = vehicle;

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

      return await prisma.vehicle.update({
        data: {
          chassi,
          marca,
          modelo,
          placa,
          renavam,
          ano,
        },
        where: {
          id,
        },
      });
    } catch (error) {
      console.log(error);
      throw new ApiError(400, error);
    }
  }
  async delete(vehicleId?: string): Promise<boolean> {
    try {
      const vehicle = await prisma.vehicle.delete({
        where: {
          id: vehicleId,
        },
      });

      return true;
    } catch (error) {
      console.log(error);
      throw new ApiError(400, error);
    }
  }
}
