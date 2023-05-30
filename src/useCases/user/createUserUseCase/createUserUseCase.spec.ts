import chai from "chai";
import { randomUUID } from "crypto";
import { CreateUserUseCase } from "./createUserUseCase";
import { Role, User } from "../../../entities/User";
import bcrypt from "bcrypt";
import { FakeUserRepository } from "../../../repositories/FakeUserRepository";
import { ApiError } from "../../../errors";

const { assert, should, expect } = chai;

describe("User Create, POST /user", () => {
  let fakeRepository, useCase;
  before(() => {
    fakeRepository = new FakeUserRepository();
    useCase = new CreateUserUseCase(fakeRepository);
  });

  it("should create a new User on database", async () => {
    const user = {
      name: `Usuario novo`,
      user: `Usuario-novo}`,
      password: "teste",
      role: "ADMIN" as Role,
    };

    const userCreated = await useCase.execute(user);

    expect(userCreated).to.be.an("object").that.is.not.undefined;
    expect(userCreated).to.have.property("user");
    expect(userCreated).to.have.property("id");
  });

  it("should throw an Error if User already exists on database", async () => {
    const user = {
      name: `Usuario novo`,
      user: `usuario1`,
      password: "teste",
      role: "ADMIN" as Role,
    };

    const userCreated = await useCase.execute(user).catch((err) => {
      expect(err.statusCode).to.equal(400);
      expect(err.msg).to.equal("O usuario já existe");
    });

    expect(userCreated).to.be.undefined;
  });

  it("should throw an Error if User Data are not informed", async () => {
    const user = {
      user: `usuario10`,
    };

    const userCreated = await useCase.execute(user).catch((err) => {
      expect(err.statusCode).to.equal(400);
      expect(err.msg).to.equal("Dados não informados pelo cliente");
    });

    expect(userCreated).to.be.undefined;
  });
});
