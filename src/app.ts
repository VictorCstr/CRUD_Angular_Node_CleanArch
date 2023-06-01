import express from "express";
import vehiclesRouter from "./routes/VehiclesRouter";
import userRouter from "./routes/UserRouter";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(vehiclesRouter);
app.use(userRouter);

export default app;
