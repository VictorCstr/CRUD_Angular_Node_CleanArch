import express, { Request, Response } from "express";
import { ApiError } from "../errors";
import { getAllVehiclesUseCase } from "../useCases/vehicle/getAllVehiclesUseCase";

const routes = express.Router();
routes.get("/vehicle", async (req, res) => {
  try {
    const projects = await getAllVehiclesUseCase.execute();
    return res.status(201).json(projects);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: err || "Unexpected Error" });
  }
});

export default routes;
