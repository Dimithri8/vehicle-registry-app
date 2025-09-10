import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@mui/material";

export default function VehiclesTable({ vehicles, handleDelete, handleEdit }) {
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
          {vehicles.map((vehicle, index) => (
            <TableRow key={index}>
              <TableCell>{vehicle.licensePlate}</TableCell>
              <TableCell>{vehicle.ownerName}</TableCell>
              <TableCell>{vehicle.make}</TableCell>
              <TableCell>{vehicle.model}</TableCell>
              <TableCell>{vehicle.status}</TableCell>
              <TableCell sx={{ display: "flex", gap: 1 }}>
                <Button
                  type="button"
                  variant="outlined"
                  onClick={() => handleEdit(vehicle)}
                >
                  Edit
                </Button>
                <Button
                  onClick={() => handleDelete(vehicle)}
                  type="button"
                  variant="outlined"
                  color={"error"}
                >
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
