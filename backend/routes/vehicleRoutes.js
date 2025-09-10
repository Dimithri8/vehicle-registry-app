import express from "express";
import {
  createVehicle,
  getAllVehicles,
  updateVehicle,
  deleteVehicle,
} from "../controllers/vehicleController.js";

const router = express.Router();

router.post("/", createVehicle);
router.get("/", getAllVehicles);
router.put("/:licensePlate", updateVehicle);
router.delete("/:licensePlate", deleteVehicle);

export default router;
