import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/db.js";
import vehicleRoutes from "./routes/vehicleRoutes.js";

dotenv.config();
connectDb();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Api is running"));
app.use("/vehicles", vehicleRoutes);

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
