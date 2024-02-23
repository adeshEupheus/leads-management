import { TextField } from "@mui/material";
import React from "react";

const TextInput: React.FC<TextInputProps> = ({
  label,
  handleChange,
  type,
  readOnly,
  value,
  placeholder,
}) => {
  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      type={type ? type : "text"}
      value={value ? value : undefined}
      placeholder={placeholder ? placeholder : undefined}
      InputProps={{
        readOnly: readOnly ? true : false,
      }}
      className="!shadow-lg"
      onChange={(e) => {
        if (handleChange) {
          handleChange(e.target.value);
        }
      }}
      sx={{ width: 300, border: "1px solid black", borderRadius: "5px" }}
    />
  );
};

interface TextInputProps {
  label?: string;
  handleChange?: (val: string) => void;
  type?: string;
  readOnly?: boolean;
  value?: string;
  placeholder?: string;
}

export default TextInput;
