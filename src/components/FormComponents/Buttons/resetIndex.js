import React from "react";
import { Button } from "@mui/material";
import { useFormikContext } from "formik";

function ButtonResetWrapper({children, ...otherProps}) {
  const { handleReset } = useFormikContext();

  const handleResetForm = () => {
    handleReset();
  };

  const configButton = {
    onClick: handleResetForm,
    variant: "contained",
    fullWidth: true,
    color: "primary",
  }

  return <Button {...configButton} >{children}</Button>;
}

export default ButtonResetWrapper;