import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@mui/material";

export default function VehiclesTable() {
  const registeredVehicles = [
    {
      licensePlate: "ABC-1234",
      ownerName: "John Doe",
      make: "Toyota",
      model: "Corolla",
      status: "Active",
    },
    {
      licensePlate: "XYZ-5678",
      ownerName: "Jane Smith",
      make: "Honda",
      model: "Civic",
      status: "Inactive",
    },
    {
      licensePlate: "LMN-9012",
      ownerName: "Robert Brown",
      make: "Ford",
      model: "Mustang",
      status: "Active",
    },
    {
      licensePlate: "PQR-3456",
      ownerName: "Emily Davis",
      make: "Chevrolet",
      model: "Camaro",
      status: "Pending",
    },
    {
      licensePlate: "TUV-7890",
      ownerName: "Michael Wilson",
      make: "Nissan",
      model: "Altima",
      status: "Active",
    },
  ];

  return (
    <TableContainer sx={{ mt: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 700 }}>License Plate</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Owner Name</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Make</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Model</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Status</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {registeredVehicles.map((vehicle, index) => (
            <TableRow key={index}>
              <TableCell>{vehicle.licensePlate}</TableCell>
              <TableCell>{vehicle.ownerName}</TableCell>
              <TableCell>{vehicle.make}</TableCell>
              <TableCell>{vehicle.model}</TableCell>
              <TableCell>{vehicle.status}</TableCell>
              <TableCell sx={{ display: "flex", gap: 1 }}>
                <Button type="button" variant="outlined">
                  Edit
                </Button>
                <Button type="button" variant="outlined" color={"error"}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
