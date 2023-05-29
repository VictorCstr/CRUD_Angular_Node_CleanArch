import { PrismaClient } from "@prisma/client";
import { ApiError } from "../errors";
import { IVehicleRepository } from "../interfaces/IVehicleRepository";
import { Vehicle } from "../entities/Vehicle";

const prisma = new PrismaClient();

export class PostgresVehicleRepository implements IVehicleRepository {
  constructor() {}

  async create(vehicle: Vehicle): Promise<Vehicle> {
    try {
      throw new Error("Method not implemented yet");
    } catch (error) {
      throw new Error("failed to save a new vehicle on postgres");
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
