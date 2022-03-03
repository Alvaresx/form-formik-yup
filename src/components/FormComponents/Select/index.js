import React from "react";
import { TextField, MenuItem } from "@mui/material";
import { useField, useFormikContext } from "formik";

function SelectWrapper({ name, options, ...otherProps }) {
  const { setFieldValue } = useFormikContext();
  const [field, data] = useField(name);

  const handleChange = (evt) => {
    const { value } = evt.target;
    setFieldValue(name, value);
  };

  const configSelect = {
    ...field,
    ...otherProps,
    select: true,
    size: "small",
    fullWidth: true,
    onChange: handleChange,
  };

  if (data && data.touched && data.error) {
    configSelect.error = true;
    configSelect.helperText = data.error;
  }

  return (
    <TextField {...configSelect}>
      {options.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
      ))}
    </TextField>
  );
}

export default SelectWrapper;
