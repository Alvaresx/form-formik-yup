import React from "react";
import { TextField } from "@mui/material";
import { useField, useFormikContext } from "formik";
import cep from "cep-promise";

function TextFieldWrapper({ name, ...otherProps }) {
  const [field, data] = useField(name);


  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
    size: "small",
    required: name === "complemento" ? false : true,
  };

  if (data && data.touched && data.error) {
    configTextfield.error = true;
    configTextfield.helperText = data.error;
  }

  return <TextField {...configTextfield} />;
}

export default TextFieldWrapper;
