import { TextField } from "@mui/material";
import React from "react";
import Autocomplete from "@mui/material/Autocomplete";

const DropDown: React.FC<DropDownProps> = ({ label, handleChange, data }) => {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={data}
      sx={{ width: 300, border: "1px solid black", borderRadius: "5px" }}
      onChange={(e, val) => {
        if (val?.label) {
          handleChange(val?.label);
        }
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          onChange={(e) => console.log(e.target.value)}
        />
      )}
    />
  );
};

interface DropDownProps {
  label: string;
  handleChange: (val: string) => void;
  data: { label: string }[];
}

export default DropDown;
