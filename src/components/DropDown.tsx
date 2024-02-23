import { TextField } from "@mui/material";
import React from "react";
import Autocomplete from "@mui/material/Autocomplete";

const DropDown: React.FC<DropDownProps> = ({ label, handleChange, data }) => {
  return (
    <Autocomplete
      disablePortal
      disableClearable
      id="combo-box-demo"
      options={data}
      sx={{ width: 300, border: "1px solid black", borderRadius: "5px" }}
      onChange={(e, val) => {
        if (val) {
          handleChange(val);
        }
      }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};

interface DropDownProps {
  label: string;
  handleChange: (val: any) => void;
  data: any[];
}

export default DropDown;
