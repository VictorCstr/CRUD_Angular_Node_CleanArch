import chai from "chai";
import { GetOneVehicleUseCase } from "./getOneVehicleUseCase";
import { FakeVehicleRepository } from "../../../repositories/FakeVehicleRepository";

const { assert, should, expect } = chai;

describe("Get single Vehicle, get /vehicle/:id", () => {
  let fakeRepository, useCase;
  before(() => {
    fakeRepository = new FakeVehicleRepository();
    useCase = new GetOneVehicleUseCase(fakeRepository);
  });

  it("should return vehicle from a vehicleId", async () => {
    const vehicleId = "2";
    const vehicles = await useCase.execute({ vehicleId });

    expect(vehicles).to.have.property("chassi");
    expect(vehicles).to.be.an("object").that.is.not.undefined;
  });

  it("should throw an Error if vehicle it's not registered on database", async () => {
    const vehicleId = "22";

    const vehicle = await useCase.execute({ vehicleId }).catch((err) => {
      expect(err.statusCode).to.equal(400);
      expect(err.msg).to.equal("Veículo não localizado!");
    });

    expect(vehicle).to.be.undefined;
  });

  it("should throw an Error if User Data are not informed", async () => {
    const vehicle = await useCase
      .execute({ projectId: undefined })
      .catch((err) => {
        expect(err.statusCode).to.equal(400);
        expect(err.msg).to.equal("ID não fornecido!");
      });
  });
});
