import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import {
  Box,
  TextField,
  Button,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

export default function VehicleForm({
  isOpen,
  handleCloseForm,
  handleSubmit,
  newVehicle,
  handleChange,
  formTitle,
  buttonLabel,
}) {
  const selectItems = [
    { value: "Active", label: "Active" },
    { value: "Expired", label: "Expired" },
    { value: "Expires Soon", label: "Expires Soon" },
  ];
  return (
    <Dialog open={isOpen}>
      <DialogTitle>{formTitle} Vehicle</DialogTitle>
      <DialogContent>
        <Box
          id="vehicle-form"
          component={"form"}
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 1,
            width: 400,
          }}
        >
          <TextField
            name="licensePlate"
            value={newVehicle.licensePlate}
            type="text"
            placeholder="License Plate"
            onChange={handleChange}
            required
          />
          <TextField
            name="ownerName"
            value={newVehicle.ownerName}
            type="text"
            placeholder="Owner Name"
            onChange={handleChange}
            required
          />
          <TextField
            name="make"
            value={newVehicle.make}
            type="text"
            placeholder="Make"
            onChange={handleChange}
            required
          />
          <TextField
            name="model"
            value={newVehicle.model}
            type="text"
            placeholder="Model"
            onChange={handleChange}
            required
          />
          <InputLabel id="status-select-label">Status</InputLabel>
          <Select
            name="status"
            labelId="status-select-label"
            id="status-select"
            value={newVehicle.status}
            onChange={handleChange}
          >
            {selectItems.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </DialogContent>
      <DialogActions sx={{ mr: 2, mb: 2 }}>
        <Button type="button" variant="outlined" onClick={handleCloseForm}>
          Cancel
        </Button>
        <Button form="vehicle-form" type="submit" variant="contained">
          {buttonLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
