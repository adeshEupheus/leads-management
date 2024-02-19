import { TextField } from "@mui/material";
import React from "react";

const TextInput: React.FC<TextInputProps> = ({ label, handleChange, type }) => {
  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      type={type ? type : "text"}
      className="!shadow-lg"
      onChange={(e) => {
        handleChange(e.target.value);
      }}
      sx={{ width: 300, border: "1px solid black", borderRadius: "5px" }}
    />
  );
};

interface TextInputProps {
  label: string;
  handleChange: (val: string) => void;
  type?: string;
}

export default TextInput;
