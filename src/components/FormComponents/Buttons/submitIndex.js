import React from "react";
import { Button } from "@mui/material";
import { useFormikContext } from "formik";

function ButtonSubmitWrapper({children, ...otherProps}) {
  const { handleSubmit } = useFormikContext();

  const handleSubmitForm = () => {
    handleSubmit();
  };

  const configButton = {
    onClick: handleSubmitForm,
    variant: "contained",
    fullWidth: true,
    color: "primary",
  }

  return <Button {...configButton} >{children}</Button>;
}

export default ButtonSubmitWrapper;
