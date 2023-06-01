import chai from "chai";
import { randomUUID } from "crypto";
import { LoginUseCase } from "./loginUseCase";
import { Role, User } from "../../../entities/User";
import bcrypt from "bcrypt";
import { FakeUserRepository } from "../../../repositories/FakeUserRepository";
import { ApiError } from "../../../errors";

const { assert, should, expect } = chai;

describe("User Login, POST /login", () => {
  let fakeRepository, useCase;
  before(() => {
    fakeRepository = new FakeUserRepository();
    useCase = new LoginUseCase(fakeRepository);
  });

  it("should login and return and string token", async () => {
    const user = {
      user: `usuario1`,
      password: "teste",
    };

    const userLogin = await useCase.execute(user);

    expect(userLogin).to.be.a("string");
    expect(userLogin).to.equal("Autorizado");
  });

  it("should throw an Error if User it's not registered on database", async () => {
    const user = {
      user: `usuario3`,
      password: "teste",
    };

    const userLogin = await useCase.execute(user).catch((err) => {
      expect(err.statusCode).to.equal(400);
      expect(err.msg).to.equal("Usuário não está cadastrado!");
    });

    expect(userLogin).to.be.undefined;
  });

  it("should throw an Error if User Data are not informed", async () => {
    const user = {
      password: `usuario10`,
    };

    const userCreated = await useCase.execute(user).catch((err) => {
      expect(err.statusCode).to.equal(400);
      expect(err.msg).to.equal("Dados não informados pelo cliente");
    });

    expect(userCreated).to.be.undefined;
  });
  it("should throw an Error if User are not authorized", async () => {
    const user = {
      user: `usuario1`,
      password: "senhaErrada",
    };

    const userCreated = await useCase.execute(user).catch((err) => {
      expect(err.statusCode).to.equal(401);
      expect(err.msg).to.equal("Não autorizado!");
    });

    expect(userCreated).to.be.undefined;
  });
});
