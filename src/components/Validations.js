import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Form from "./Form";
import { cpf } from "cpf-cnpj-validator";

function InputForm(props) {
  const validationSchema = Yup.object({
    nome: Yup.string().required("Nome é obrigatório"),
    dataNascimento: Yup.string()
      .required("Data de Nascimento é obrigatório")
      .min(10, "Insira uma data válida"),
    telefone: Yup.string()
      .required("Telefone é obrigatório")
      .min(14, "Insira um telefone válido!")
      .max(15, "Insira um telefone válido!"),
    email: Yup.string()
      .required("E-mail é obrigatório")
      .email("Insira um e-mail válido"),
    rg: Yup.string().required("RG é obrigatório"),
    orgaoEmissor: Yup.string().required("Orgão emissor é obrigatório"),
    cpf: Yup.string()
      .required("CPF é obrigatório")
      .test("validCpf", "Insira um CPF válido", (value) => cpf.isValid(value)),
    endereco: Yup.string().required("Endereço é obrigatório"),
    numero: Yup.string().required("Número é obrigatório"),
    nacionalidade: Yup.string().required("Nacionalidade é obrigatório"),
  });
  const values = {
    nome: "",
    telefone: "",
    email: "",
    cpf: "",
    dataNascimento: "",
    rg: "",
    endereco: "",
    orgaoEmissor: "",
    nacionalidade: "",
    numero: "",
  };

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
