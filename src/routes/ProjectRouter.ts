import express, { Request, Response } from "express";
import { ApiError } from "../errors";

const routes = express.Router();
routes.get("/", (req, res) => {
  console.log("Funcionando a rota principal");
});

export default routes;
