import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type SelectProps = {
  data: any;
  label: string;
  placeholder: string;
};

export default function PatientSelect({
  data,
  label,
  placeholder,
}: SelectProps) {
  const [selection, setSelection] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSelection(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{placeholder}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selection}
          label={label}
          onChange={handleChange}
        >
          {data?.map((patient: any) => (
            <MenuItem key={patient.id} value={patient.id}>
              {patient.firstName} {patient.lastName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
