import Vehicle from "../models/Vehicle.js";

export const createVehicle = async (req, res) => {
  try {
    const newVehicle = new Vehicle(req.body);
    await newVehicle.save();
    res.status(201).json({
      message: "Vehicle registered successfully",
      vehicle: newVehicle,
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed vehicle registration", error: error.message });
  }
};

export const getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res
      .status(200)
      .json({ message: "Fetched all registered vehicles!", vehicles });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch registered vehicles",
      error: error.message,
    });
  }
};

export const updateVehicle = async (req, res) => {
  try {
    const { licensePlate } = req.params;
    const updateData = req.body;
    const updatedVehicle = await Vehicle.findOneAndUpdate(
      { licensePlate: licensePlate },
      updateData,
      { new: true }
    );
    if (!updatedVehicle)
      return res.status(404).json({ message: "Vehicle not found" });
    res
      .status(200)
      .json({ message: "Vehicle updated successfully", updatedVehicle });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update vehicle", error: error.message });
  }
};

export const deleteVehicle = async (req, res) => {
  try {
    const { licensePlate } = req.params;
    const deletedVehicle = await Vehicle.findOneAndDelete({
      licensePlate: licensePlate,
    });
    res
      .status(200)
      .json({ message: "Vehicle deleted successfully", deletedVehicle });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete vehicle", error: error.message });
  }
};
