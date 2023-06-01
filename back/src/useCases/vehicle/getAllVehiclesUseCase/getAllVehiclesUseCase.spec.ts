import chai from "chai";
import { GetAllVehiclesUseCase } from "./getAllVehiclesUseCase";
import { FakeVehicleRepository } from "../../../repositories/FakeVehicleRepository";

const { assert, should, expect } = chai;

describe("Get Vehicles, get /vehicle", () => {
  let fakeRepository, useCase;
  before(() => {
    fakeRepository = new FakeVehicleRepository();
    useCase = new GetAllVehiclesUseCase(fakeRepository);
  });

  it("should return all vehicles from the list", async () => {
    const vehicles = await useCase.execute();

    expect(vehicles).to.be.an("array").that.is.not.empty;
  });
});
