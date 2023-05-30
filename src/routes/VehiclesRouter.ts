import express, { Request, Response } from "express";
import { ApiError } from "../errors";
import { getAllVehiclesUseCase } from "../useCases/vehicle/getAllVehiclesUseCase";
import { createVehicleUseCase } from "../useCases/vehicle/createVehicleUseCase";
import { getOneVehicleUseCase } from "../useCases/vehicle/getOneVehicleUseCase";
import { deleteVehicleUseCase } from "../useCases/vehicle/deleteVehicleUseCase";
import { updateVehicleUseCase } from "../useCases/vehicle/updateVehicleUseCase";

const routes = express.Router();

routes.get("/vehicle", async (req, res) => {
  try {
    const vehicles = await getAllVehiclesUseCase.execute();
    return res.status(200).json(vehicles);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: err || "Unexpected Error" });
  }
});

routes.get("/vehicle/:id?", async (req, res) => {
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

routes.post("/vehicle", async (req, res) => {
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

routes.put("/vehicle/:id", async (req, res) => {
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
    return res.status(201).json(vehicle);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: err || "Unexpected Error" });
  }
});

routes.delete("/vehicle/:id", async (req, res) => {
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
});

export default routes;
