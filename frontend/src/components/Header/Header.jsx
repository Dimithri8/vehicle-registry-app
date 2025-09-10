import { Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Typography, TextField, Button } from "@mui/material";
export default function Header({ handleSearch, handleOpenForm }) {
  return (
    <Box>
      <Typography variant="h1" sx={{ fontSize: 24, fontWeight: 600 }}>
        Vehicle Registration
      </Typography>
      <Box
        component={"section"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          component={"form"}
          onSubmit={handleSearch}
          sx={{ display: "flex", gap: 1, mt: 2 }}
        >
          <TextField
            placeholder="Search by vehicle name or ID"
            sx={{ width: 250 }}
          />
          <Button variant={"contained"} type={"submit"}>
            Search
          </Button>
        </Box>
        <Button
          startIcon={<AddIcon />}
          type={"button"}
          variant={"contained"}
          sx={{ padding: 2 }}
          onClick={handleOpenForm}
        >
          Add Vehicle
        </Button>
      </Box>
    </Box>
  );
}
