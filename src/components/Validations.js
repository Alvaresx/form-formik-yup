import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Form from "./Form";

function InputForm(props) {
  const validationSchema = Yup.object({
    nome: Yup.string().required("Nome é obrigatório"),
    telefone: Yup.string().required("Telefone é obrigatório").min(14, "Insira um telefone válido").max(15, "Insira um telefone válido")
  });
  const values = {nome: "", telefone: ""};
  const classes = props;

  return (
    <>
      <Formik
        render={(props) => <Form {...props} />}
        initialValues={values}
        validationSchema={validationSchema}
      />
    </>
  );
}

export default InputForm;
