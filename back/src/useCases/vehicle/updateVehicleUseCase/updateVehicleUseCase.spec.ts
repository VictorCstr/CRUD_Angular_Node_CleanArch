import chai from "chai";
import { UpdateVehicleUseCase } from "./updateVehicleUseCase";
import { FakeVehicleRepository } from "../../../repositories/FakeVehicleRepository";

const { assert, should, expect } = chai;

describe("Update a Vehicle, put /vehicle/:id", () => {
  let fakeRepository, useCase;
  before(() => {
    fakeRepository = new FakeVehicleRepository();
    useCase = new UpdateVehicleUseCase(fakeRepository);
  });

  it("should update and vehicle data on repository", async () => {
    const data = {
      id: "3",
      placa: "S01M120",
      chassi: "123456389AABCDEFH",
      renavam: "12342678A0A",
      modelo: "VIRTUS",
      marca: "VOLKSWAGEN",
      ano: 2019,
    };

    const vehicles = await useCase.execute(data);

    expect(vehicles).to.have.property("chassi");
    expect(vehicles).to.be.an("object").that.is.not.undefined;
    expect(vehicles.id).to.equal(data.id);
  });

  it("should throw an Error if vehicle it's not registered on database", async () => {
    const data = {
      id: "32",
      placa: "S01M120",
      chassi: "123456389AABCDEFH",
      renavam: "12342678A0A",
      modelo: "VIRTUS",
      marca: "VOLKSWAGEN",
      ano: 2019,
    };

    const vehicle = await useCase.execute(data).catch((err) => {
      expect(err.statusCode).to.equal(400);
      expect(err.msg).to.equal("Veículo não localizado!");
    });

    expect(vehicle).to.be.undefined;
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
      id: "32",
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
      id: "32",
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
      id: "32",
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
