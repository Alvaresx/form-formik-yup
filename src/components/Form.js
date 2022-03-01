import React from "react";
import { TextField, Grid, Button } from "@mui/material";
import InputMask from "react-input-mask";

function Form(props) {
  const [mask, setMask] = React.useState("(99) 99999-9999");
  const {
    values: { nome, telefone },
    errors,
    touched,
    handleChange,
    isValid,
    setFieldTouched,
  } = props;

  const change = (nome, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(nome, true, false);
  };
  return (
    <Grid container justifyContent="center">
      <Grid item lg={6}>
        <form
          onSubmit={() => {
            alert("Enviado");
          }}
        >
          <Grid container spacing={2}>
            <Grid item lg={9}>
              <TextField
                id="nome"
                name="nome"
                helperText={touched.nome ? errors.nome : ""}
                error={touched.nome && Boolean(errors.nome)}
                label="Nome completo"
                value={nome}
                onChange={change.bind(null, "nome")}
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item lg={3}>
              <TextField
                id="sexo"
                name="sexo"
                label="Sexo"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item lg={3}>
              <InputMask
                mask="99/99/9999"
                maskChar={
                  null
                } /*onChange={formik.handleChange} value={formik.values.document}*/
              >
                {() => (
                  <TextField
                    id="dataNascimento"
                    name="dataNascimento"
                    label="Data Nascimento"
                    fullWidth
                    size="small"
                  />
                )}
              </InputMask>
            </Grid>
            <Grid item lg={3}>
              <InputMask
                mask={mask}
                maskChar={null}
                onChange={change.bind(null, "telefone")}
                value={telefone}
                onBlur={(e) => {
                  if (e.target.value.replace("_", "").length === 14) {
                    setMask("(99) 9999-9999");
                  }
                }}
                onFocus={(e) => {
                  if (e.target.value.replace("_", "").length === 14) {
                    setMask("(99) 99999-9999");
                  }
                }}
              >
                {() => (
                  <TextField
                    id="telefone"
                    name="telefone"
                    helperText={touched.telefone ? errors.telefone : ""}
                    error={touched.telefone && Boolean(errors.telefone)}
                    label="Telefone celular"
                    fullWidth
                    size="small"
                  />
                )}
              </InputMask>
            </Grid>
            <Grid item lg={6}>
              <TextField
                id="email"
                name="email"
                label="E-mail"
                fullWidth
                size="small"
              />
            </Grid>
            
            <Grid item lg={4}>
              <TextField id="rg" name="rg" label="RG" fullWidth size="small" />
            </Grid>
            <Grid item lg={4}>
              <TextField
                id="orgaoEmissor"
                name="orgaoEmissor"
                label="Orgão emissor"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item lg={4}>
              <InputMask
                mask="999.999.999-99"
                maskChar={
                  null
                } /*onChange={formik.handleChange} value={formik.values.document}*/
              >
                {() => (
                  <TextField
                    id="cpf"
                    name="cpf"
                    label="CPF"
                    fullWidth
                    size="small"
                  />
                )}
              </InputMask>
            </Grid>
            <Grid item lg={3}>
              <InputMask
                mask="99999-999"
                maskChar={
                  null
                } /*onChange={formik.handleChange} value={formik.values.document}*/
              >
                {() => (
                  <TextField
                    id="cep"
                    name="cep"
                    label="CEP"
                    fullWidth
                    size="small"
                  />
                )}
              </InputMask>
            </Grid>
            <Grid item lg={9}>
              <TextField
                id="endereco"
                name="endereco"
                label="Endereço"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item lg={3}>
              <TextField
                id="numero"
                name="numero"
                label="Número"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                id="complemento"
                name="complemento"
                label="Complemento"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item lg={3}>
              <TextField
                id="cidade"
                name="cidade"
                label="Cidade"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item lg={2}>
              <TextField
                id="estado"
                name="estado"
                label="Estado"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item lg={3}>
              <TextField
                id="nacionalidade"
                name="nacionalidade"
                label="Nacionalidade"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item lg={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Enviar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}

export default Form;
