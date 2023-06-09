import { Vehicle } from "../entities/Vehicle";

export interface IVehicleRepository {
  create(vehicle: Vehicle): Promise<Vehicle>;
  getAll(): Promise<Vehicle[]>;
  getOne(vehicleId: string): Promise<Vehicle>;
  updateProject(vehicle: Vehicle): Promise<Vehicle>;
  delete(vehicleId: string): Promise<boolean>;
}
