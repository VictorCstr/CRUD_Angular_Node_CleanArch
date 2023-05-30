import express from "express";
import vehiclesRouter from "./routes/VehiclesRouter";
import userRouter from "./routes/UserRouter";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(vehiclesRouter);
app.use(userRouter);

export default app;
