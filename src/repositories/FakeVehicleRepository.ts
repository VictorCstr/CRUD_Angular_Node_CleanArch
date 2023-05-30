import { ApiError } from "../errors";
import { IVehicleRepository } from "../interfaces/IVehicleRepository";
import { Vehicle } from "../entities/Vehicle";

export class FakeVehicleRepository implements IVehicleRepository {
  private vehicles: Vehicle[] = [
    {
      id: "1",
      placa: "ABC1234",
      chassi: "1234567890ABCDEFG",
      renavam: "1234567890A",
      modelo: "FOCUS",
      marca: "FORD",
      ano: 2012,
    },
    {
      id: "2",
      placa: "ABC1235",
      chassi: "1234567890ABCDEFH",
      renavam: "12345678A0A",
      modelo: "CELTA",
      marca: "CHEVROLET",
      ano: 2011,
    },
    {
      id: "3",
      placa: "ABC12A5",
      chassi: "123456789AABCDEFH",
      renavam: "12349678A0A",
      modelo: "UP TSI",
      marca: "VOLKSWAGEN",
      ano: 2011,
    },
  ];

  async create(vehicle: Vehicle): Promise<Vehicle> {
    this.vehicles.push(vehicle);
    return vehicle;
  }

  async getAll(): Promise<Vehicle[]> {
    return this.vehicles;
  }

  async getOne(vehicleId: string): Promise<Vehicle> {
    const vehicle = this.vehicles.find((vehicle) => vehicle.id == vehicleId);
    return vehicle;
  }

  async updateProject(vehicleData: Vehicle): Promise<Vehicle> {
    let vehicleToUpdate = this.vehicles.find(
      (vehicle) => vehicle.id === vehicleData.id
    );

    vehicleToUpdate.ano = vehicleData.ano;
    vehicleToUpdate.chassi = vehicleData.chassi;
    vehicleToUpdate.marca = vehicleData.marca;
    vehicleToUpdate.modelo = vehicleData.modelo;
    vehicleToUpdate.placa = vehicleData.placa;
    vehicleToUpdate.renavam = vehicleData.renavam;

    return vehicleToUpdate;
  }
  async delete(vehicleId: string): Promise<boolean> {
    let vehicle = this.vehicles.find((vehicle) => vehicle.id == vehicleId);
    let vehicleDeleted;
    vehicleDeleted.push(vehicle);
    return true;
  }
}
