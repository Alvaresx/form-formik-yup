import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { cpf } from "cpf-cnpj-validator";
import cep from "cep-promise";
import { Grid, Paper, Typography } from "@mui/material";
import TextFieldWrapper from "./FormComponents/Textfield";
import SelectWrapper from "./FormComponents/Select";
import ButtonSubmitWrapper from "./FormComponents/Buttons/submitIndex";
import ButtonResetWrapper from "./FormComponents/Buttons/resetIndex";
import { useSnackbar } from "notistack";

function FormComponent() {
  const { enqueueSnackbar } = useSnackbar();
  const validationSchema = Yup.object({
    nome: Yup.string().required("Nome é obrigatório"),
    genero: Yup.string().required("Gênero é obrigatório"),
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
    cep: Yup.string().required("CEP é obrigatório"),
    endereco: Yup.string().required("Endereço é obrigatório"),
    numero: Yup.string().required("Número é obrigatório"),
    complemento: Yup.string(),
    bairro: Yup.string().required("Bairro é obrigatório"),
    cidade: Yup.string().required("Cidade é obrigatório"),
    estado: Yup.string().required("Estado é obrigatório"),
    nacionalidade: Yup.string().required("Nacionalidade é obrigatório"),
  });

  const values = {
    nome: "",
    genero: "",
    dataNascimento: "",
    telefone: "",
    email: "",
    rg: "",
    orgaoEmissor: "",
    cpf: "",
    cep: "",
    endereco: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
    nacionalidade: "",
  };

  const handleBlur = (e, setFieldValue) => {
    if (e.target.value !== "") {
      cep(e.target.value)
        .then((res) => {
          setFieldValue("endereco", res.street);
          setFieldValue("bairro", res.neighborhood);
          setFieldValue("cidade", res.city);
          setFieldValue("estado", res.state);
        })
        .catch((err) => {
          enqueueSnackbar("CEP não encontrado. Tente novamente!", {
            variant: "error",
            anchorOrigin: { horizontal: "right", vertical: "top" },
          });
        });
    }
  };

  return (
    <>
      <Formik
        initialValues={values}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          enqueueSnackbar("Formulário enviado com sucesso!", {
            variant: "success",
            anchorOrigin: { horizontal: "right", vertical: "top" },
          });
        }}
      >
        {({ setFieldValue }) => (
          <Form>
            <Grid container justifyContent="center">
              <Grid
                item
                lg={6}
                md={7}
                sm={8}
                xs={10}
                className="main--grid--item"
              >
                <Paper elevation={3} className="paper--form">
                  <Typography className="form--title">
                    Formulário Cadastral
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item lg={9} md={9} sm={9} xs={12}>
                      <TextFieldWrapper name="nome" label="Nome" />
                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xs={12}>
                      <SelectWrapper
                        name="genero"
                        label="Genero"
                        options={["Cisgênero", "Transgênero", "Não binário"]}
                      />
                    </Grid>
                    <Grid item lg={3} md={6} sm={6} xs={12}>
                      <TextFieldWrapper
                        name="dataNascimento"
                        label="Data Nascimento"
                      />
                    </Grid>
                    <Grid item lg={3} md={6} sm={6} xs={12}>
                      <TextFieldWrapper name="telefone" label="Telefone" />
                    </Grid>
                    <Grid item lg={6} md={12} sm={12} xs={12}>
                      <TextFieldWrapper name="email" label="E-mail" />
                    </Grid>

                    <Grid item lg={4} md={4} sm={6} xs={12}>
                      <TextFieldWrapper name="rg" label="RG" />
                    </Grid>
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                      <TextFieldWrapper
                        name="orgaoEmissor"
                        label="Orgão Emissor"
                      />
                    </Grid>
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                      <TextFieldWrapper name="cpf" label="CPF" />
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={12}>
                      <TextFieldWrapper
                        name="cep"
                        label="CEP"
                        onBlur={(e) => handleBlur(e, setFieldValue)}
                      />
                    </Grid>
                    <Grid item lg={9} md={9} sm={12} xs={12}>
                      <TextFieldWrapper name="endereco" label="Endereço" />
                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xs={12}>
                      <TextFieldWrapper name="numero" label="Número" />
                    </Grid>
                    <Grid item lg={5} md={9} sm={9} xs={12}>
                      <TextFieldWrapper
                        name="complemento"
                        label="Complemento"
                      />
                    </Grid>
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                      <TextFieldWrapper name="bairro" label="Bairro" />
                    </Grid>
                    <Grid item lg={3} md={5} sm={6} xs={12}>
                      <TextFieldWrapper name="cidade" label="Cidade" />
                    </Grid>
                    <Grid item lg={2} md={3} sm={6} xs={12}>
                      <TextFieldWrapper name="estado" label="Estado" />
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                      <TextFieldWrapper
                        name="nacionalidade"
                        label="Nacionalidade"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    justifyContent="center"
                    className="button--group"
                  >
                    <Grid
                      item
                      lg={4}
                      md={4}
                      sm={6}
                      xs={6}
                      className="button--item"
                    >
                      <ButtonResetWrapper>Resetar</ButtonResetWrapper>
                    </Grid>
                    <Grid
                      item
                      lg={4}
                      md={4}
                      sm={6}
                      xs={6}
                      className="button--item"
                    >
                      <ButtonSubmitWrapper>Enviar</ButtonSubmitWrapper>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default FormComponent;
