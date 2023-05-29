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

      if (renavam.length != 11) {
        throw new ApiError(
          400,
          "RENAVAM não possui o formato certo com 11 caracteres"
        );
      }
      if (chassi.length != 17) {
        throw new ApiError(
          400,
          "CHASSI não possui o formato certo com 17 caracteres"
        );
      }
      if (placa.length != 7) {
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
      throw new Error("Method not implemented yet");
    } catch (error) {
      console.log(error);
      throw new Error("failed searching a single vehicle on postgres");
    }
  }

  async updateProject(vehicle: Vehicle): Promise<Vehicle> {
    try {
      throw new Error("Method not implemented yet");
    } catch (error) {
      console.log(error);
      throw new Error("failed to update a vehicle on postgres");
    }
  }
  async delete(projectId: string): Promise<Vehicle> {
    try {
      throw new Error("Method not implemented yet");
    } catch (error) {
      console.log(error);
      throw new Error("failed to delete a vehicle on postgres");
    }
  }
}
