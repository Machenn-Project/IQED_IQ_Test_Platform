import { colors, TextField } from "@mui/material";
import { theme } from "flowbite-react";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const FormTextField = ({ field, type, placeholder }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={field}
      render={({ field: { onChange, value } }) => (
        <TextField
          onChange={onChange}
          value={value}
          error={!!errors[`${field}`]?.message}
          fullWidth
          placeholder={placeholder}
          type={type}
          variant="outlined"
          color={!!errors[`${field}`]?.message ? "error" : "primary"}
          helperText={<>{errors[`${field}`]?.message}</>}
          inputProps={{
            style: {
              height: "100%",
              padding: "0 14px",
              "&::placeholder": {
                fontSize: "12px",
              },
            },
          }}
        />
      )}
    />
  );
};

export default FormTextField;
