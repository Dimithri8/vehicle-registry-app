import { useState } from "react";
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
  function addNewVehicle(e) {
    e.preventDefault();
    setAllVehicles((prevValue) => [...prevValue, newVehicle]);
    setNewVehicle({
      licensePlate: "",
      ownerName: "",
      make: "",
      model: "",
      status: "Active",
    });
    setIsOpen(false);
  }
  function handleUpdate(e) {
    e.preventDefault();
    setAllVehicles((prevVehicles) =>
      prevVehicles.map((item) =>
        item.licensePlate === newVehicle.licensePlate ? { ...newVehicle } : item
      )
    );
    setIsOpen(false);
  }
  function handleDelete(vehicle) {
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
