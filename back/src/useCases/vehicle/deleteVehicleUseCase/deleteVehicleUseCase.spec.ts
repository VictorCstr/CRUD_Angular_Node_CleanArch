import chai from "chai";
import { DeleteVehicleUseCase } from "./deleteVehicleUseCase";
import { FakeVehicleRepository } from "../../../repositories/FakeVehicleRepository";

const { assert, should, expect } = chai;

describe("Delete a Vehicle, delete /vehicle/:id", () => {
  let fakeRepository, useCase;
  before(() => {
    fakeRepository = new FakeVehicleRepository();
    useCase = new DeleteVehicleUseCase(fakeRepository);
  });

  it("should throw an Error if vehicle it's not registered on database", async () => {
    const vehicleId = "92103210921";
    const vehicle = await useCase.execute({ vehicleId }).catch((err) => {
      expect(err.statusCode).to.equal(400);
      expect(err.msg).to.equal("Veículo não localizado!");
    });

    expect(vehicle).to.be.undefined;
  });

  it("should delete a vehicle on repository", async () => {
    const vehicleId = "1";

    const vehicles = await useCase.execute({ vehicleId });

    expect(vehicles).to.be.true;
  });

  it("should throw an Error if User Data are not informed", async () => {
    const vehicle = await useCase
      .execute({ vehicleId: undefined })
      .catch((err) => {
        expect(err.statusCode).to.equal(400);
        expect(err.msg).to.equal("Dados não informados pelo cliente");
      });
  });
});
