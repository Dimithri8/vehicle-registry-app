import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema(
  {
    licensePlate: { type: String, required: true },
    ownerName: { type: String, required: true },
    make: { type: String, required: true },
    model: { type: String, required: true },
    status: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const Vehicle = mongoose.model("Vehicle", vehicleSchema);
export default Vehicle;
