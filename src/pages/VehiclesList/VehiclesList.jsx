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
  function handleDelete(vehicle) {
    setAllVehicles((prevItem) =>
      prevItem.filter((item) => item.licensePlate !== vehicle.licensePlate)
    );
  }
  function handleOpenForm() {
    setIsOpen(true);
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
        handleSubmit={addNewVehicle}
      />
      <VehiclesTable vehicles={allVehicles} handleDelete={handleDelete} />
    </>
  );
}
