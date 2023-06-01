import express, { Request, Response } from "express";
import { createUserUseCase } from "../useCases/user/createUserUseCase";
import { loginUseCase } from "../useCases/user/loginUseCase";

const routes = express.Router();

routes.post("/user", async (req: Request, res: Response) => {
  try {
    const { name, user, password } = req.body;
    const vehicle = await createUserUseCase.execute({ name, password, user });
    return res.status(201).json(vehicle);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: err || "Unexpected Error" });
  }
});

routes.post("/login", async (req: Request, res: Response) => {
  try {
    const { user, password } = req.body;
    const login = await loginUseCase.execute({
      user,
      password,
    });
    return res.status(200).json(login);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: err || "Unexpected Error" });
  }
});

export default routes;
