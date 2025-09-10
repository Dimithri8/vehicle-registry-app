import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import VehiclesTable from "../../components/VehiclesTable/VehiclesTable";
import VehicleForm from "../../components/VehicleForm/VehicleForm";
export default function VehiclesList() {
  const [isOpen, setIsOpen] = useState(false);
  const [newVehicle, setNewVehicle] = useState({
    licensePlate: "",
    ownerName: "",
    make: "",
    model: "",
    status: "Active",
  });
  const [allVehicles, setAllVehicles] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNewVehicle((prevValue) => ({ ...prevValue, [name]: value }));
  }

  async function addNewVehicle(e) {
    e.preventDefault();

    const response = await fetch(`http://localhost:3000/vehicles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newVehicle),
    });
    const data = await response.json();
    setAllVehicles((prevValue) => [...prevValue, data.vehicle]);
    setNewVehicle({
      licensePlate: "",
      ownerName: "",
      make: "",
      model: "",
      status: "Active",
    });
    setIsOpen(false);
  }

  useEffect(() => {
    async function getAllVehicles() {
      const response = await fetch(`http://localhost:3000/vehicles`);
      const result = await response.json();
      setAllVehicles(result.vehicles);
    }
    getAllVehicles();
  }, []);

  async function handleUpdate(e) {
    e.preventDefault();
    const response = await fetch(
      `http://localhost:3000/vehicles/${newVehicle.licensePlate}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newVehicle),
      }
    );
    const data = await response.json();

    setAllVehicles((prevVehicles) =>
      prevVehicles.map((item) =>
        item.licensePlate === newVehicle.licensePlate
          ? { ...data.updatedVehicle }
          : item
      )
    );
    setIsOpen(false);
  }

  async function handleDelete(vehicle) {
    await fetch(`http://localhost:3000/vehicles/${vehicle.licensePlate}`, {
      method: "DELETE",
    });

    setAllVehicles((prevItem) =>
      prevItem.filter((item) => item.licensePlate !== vehicle.licensePlate)
    );
  }
  function handleEdit(vehicle) {
    setIsOpen(true);
    setIsEditing(true);
    setNewVehicle(vehicle);
  }
  function handleOpenForm() {
    setIsOpen(true);
    setIsEditing(false);
    setNewVehicle({
      licensePlate: "",
      ownerName: "",
      make: "",
      model: "",
      status: "Active",
    });
  }
  function handleCloseForm() {
    setIsOpen(false);
  }

  return (
    <>
      <Header handleOpenForm={handleOpenForm} />
      <VehicleForm
        isOpen={isOpen}
        handleCloseForm={handleCloseForm}
        handleChange={handleChange}
        newVehicle={newVehicle}
        handleSubmit={isEditing ? handleUpdate : addNewVehicle}
        formTitle={isEditing ? "Edit" : "Add"}
        buttonLabel={isEditing ? "Save Changes" : "Add Vehicle"}
      />
      <VehiclesTable
        vehicles={allVehicles}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </>
  );
}
