import chai from "chai";
import { CreateVehicleUseCase } from "./createVehicleUseCase";
import { FakeVehicleRepository } from "../../../repositories/FakeVehicleRepository";

const { assert, should, expect } = chai;

describe("Create a Vehicle, post /vehicle", () => {
  let fakeRepository, useCase;
  before(() => {
    fakeRepository = new FakeVehicleRepository();
    useCase = new CreateVehicleUseCase(fakeRepository);
  });

  it("should create a new vehicle on repository", async () => {
    const data = {
      id: "9",
      placa: "S01M120",
      chassi: "123456389A9BCDEFH",
      renavam: "1234267890A",
      modelo: "UNO",
      marca: "FIAT",
      ano: 2003,
    };

    const vehicles = await useCase.execute(data);

    expect(vehicles).to.have.property("chassi");
    expect(vehicles).to.be.an("object").that.is.not.undefined;
    expect(vehicles.placa).to.equal(data.placa);
  });

  it("should throw an Error if User Data are not informed", async () => {
    const data = {
      id: "3",
      placa: "S01M120",
      marca: "VOLKSWAGEN",
      ano: 2019,
    };
    const vehicle = await useCase.execute(data).catch((err) => {
      expect(err.statusCode).to.equal(400);
      expect(err.msg).to.equal("Dados não informados pelo cliente");
    });
  });

  it("should throw an Error if the RENAVAM is not in the right format", async () => {
    const data = {
      placa: "S01M120",
      chassi: "123456389AABCDEFH",
      renavam: "123478A0A",
      modelo: "VIRTUS",
      marca: "VOLKSWAGEN",
      ano: 2019,
    };

    const vehicle = await useCase.execute(data).catch((err) => {
      expect(err.statusCode).to.equal(400);
      expect(err.msg).to.equal(
        "RENAVAM não possui o formato certo com 11 caracteres"
      );
    });

    expect(vehicle).to.be.undefined;
  });

  it("should throw an Error if the CHASSI is not in the right format", async () => {
    const data = {
      placa: "S01M120",
      chassi: "12345639AABCDEFH",
      renavam: "123421718A0",
      modelo: "VIRTUS",
      marca: "VOLKSWAGEN",
      ano: 2019,
    };

    const vehicle = await useCase.execute(data).catch((err) => {
      expect(err.statusCode).to.equal(400);
      expect(err.msg).to.equal(
        "CHASSI não possui o formato certo com 17 caracteres"
      );
    });

    expect(vehicle).to.be.undefined;
  });

  it("should throw an Error if the PLACA/PLATE is not in the right format", async () => {
    const data = {
      placa: "S01M20",
      chassi: "123456389AABCDEFH",
      renavam: "12347181A0A",
      modelo: "VIRTUS",
      marca: "VOLKSWAGEN",
      ano: 2019,
    };

    const vehicle = await useCase.execute(data).catch((err) => {
      expect(err.statusCode).to.equal(400);
      expect(err.msg).to.equal(
        "PLACA não possui o formato certo com 7 caracteres"
      );
    });

    expect(vehicle).to.be.undefined;
  });
});
