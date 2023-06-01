import express, { Request, Response } from "express";
import { ApiError } from "../errors";
import { getAllVehiclesUseCase } from "../useCases/vehicle/getAllVehiclesUseCase";
import { createVehicleUseCase } from "../useCases/vehicle/createVehicleUseCase";
import { getOneVehicleUseCase } from "../useCases/vehicle/getOneVehicleUseCase";
import { deleteVehicleUseCase } from "../useCases/vehicle/deleteVehicleUseCase";
import { updateVehicleUseCase } from "../useCases/vehicle/updateVehicleUseCase";
import verifyJWT from "../middlewares/verifyAuth";

const routes = express.Router();

routes.get("/vehicle", verifyJWT, async (req: Request, res: Response) => {
  try {
    const vehicles = await getAllVehiclesUseCase.execute();
    return res.status(200).json(vehicles);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: err || "Unexpected Error" });
  }
});

routes.get("/vehicle/:id?", verifyJWT, async (req: Request, res: Response) => {
  try {
    const vehicleId = req.params.id;

    const vehicle = await getOneVehicleUseCase.execute({
      vehicleId,
    });
    return res.status(200).json(vehicle);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: err || "Unexpected Error" });
  }
});

routes.post("/vehicle", verifyJWT, async (req: Request, res: Response) => {
  try {
    const { marca, modelo, ano, chassi, placa, renavam } = req.body;
    const vehicle = await createVehicleUseCase.execute({
      marca,
      modelo,
      ano,
      chassi,
      placa,
      renavam,
    });
    return res.status(201).json(vehicle);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: err || "Unexpected Error" });
  }
});

routes.put("/vehicle/:id", verifyJWT, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { marca, modelo, ano, chassi, placa, renavam } = req.body;
    const vehicle = await updateVehicleUseCase.execute({
      id,
      marca,
      modelo,
      ano,
      chassi,
      placa,
      renavam,
    });
    return res.status(200).json(vehicle);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: err || "Unexpected Error" });
  }
});

routes.delete(
  "/vehicle/:id",
  verifyJWT,
  async (req: Request, res: Response) => {
    try {
      const vehicleId = req.params.id;

      const vehicle = await deleteVehicleUseCase.execute({
        vehicleId,
      });
      return res.status(200).json(vehicle);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: err || "Unexpected Error" });
    }
  }
);

export default routes;
