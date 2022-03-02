import React from "react";
import { TextField, Grid, Button, Paper } from "@mui/material";
import InputMask from "react-input-mask";

function Form(props) {
  const [mask, setMask] = React.useState("(99) 99999-9999");
  const {
    values: {
      nome,
      telefone,
      email,
      cpf,
      dataNascimento,
      rg,
      orgaoEmissor,
      nacionalidade,
      endereco,
      numero,
    },
    errors,
    touched,
    handleChange,
    isValid,
    setFieldTouched,
  } = props;

  const change = (element, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(element, true, false);
  };
  return (
    <Grid container justifyContent="center">
      <Grid item lg={6} md={7} sm={8} xs={10} sx={{ position: "relative", top: "80px", paddingBottom: "80px" }}>
        <Paper elevation={3} sx={{ padding: "24px" }}>
          <form
            onSubmit={() => {
              alert("Enviado");
            }}
          >
            <Grid container spacing={2}>
              <Grid item lg={9} md={9} sm={9} xs={12}>
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
              <Grid item lg={3} md={3} sm={3} xs={12}>
                <TextField
                  id="sexo"
                  name="sexo"
                  label="Sexo"
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item lg={3} md={6} sm={6} xs={12}>
                <InputMask
                  mask="99/99/9999"
                  maskChar={null}
                  onChange={change.bind(null, "dataNascimento")}
                  value={dataNascimento}
                >
                  {() => (
                    <TextField
                      id="dataNascimento"
                      name="dataNascimento"
                      helperText={
                        touched.dataNascimento ? errors.dataNascimento : ""
                      }
                      error={
                        touched.dataNascimento && Boolean(errors.dataNascimento)
                      }
                      label="Data nascimento"
                      fullWidth
                      size="small"
                    />
                  )}
                </InputMask>
              </Grid>
              <Grid item lg={3} md={6} sm={6} xs={12}>
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
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <TextField
                  id="email"
                  name="email"
                  helperText={touched.email ? errors.email : ""}
                  error={touched.email && Boolean(errors.email)}
                  label="E-mail"
                  onChange={change.bind(null, "email")}
                  value={email}
                  fullWidth
                  size="small"
                />
              </Grid>

              <Grid item lg={4} md={4} sm={6} xs={12}>
                <TextField
                  id="rg"
                  name="rg"
                  helperText={touched.rg ? errors.rg : ""}
                  error={touched.rg && Boolean(errors.rg)}
                  label="RG"
                  onChange={change.bind(null, "rg")}
                  value={rg}
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item lg={4} md={4} sm={6} xs={12}>
                <TextField
                  id="orgaoEmissor"
                  name="orgaoEmissor"
                  helperText={touched.orgaoEmissor ? errors.orgaoEmissor : ""}
                  error={touched.orgaoEmissor && Boolean(errors.orgaoEmissor)}
                  label="Orgão emissor"
                  onChange={change.bind(null, "orgaoEmissor")}
                  value={orgaoEmissor}
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item lg={4} md={4} sm={6} xs={12}>
                <InputMask
                  mask="999.999.999-99"
                  maskChar={null}
                  onChange={change.bind(null, "cpf")}
                  value={cpf}
                >
                  {() => (
                    <TextField
                      id="cpf"
                      name="cpf"
                      helperText={touched.cpf ? errors.cpf : ""}
                      error={touched.cpf && Boolean(errors.cpf)}
                      label="CPF"
                      fullWidth
                      size="small"
                    />
                  )}
                </InputMask>
              </Grid>
              <Grid item lg={3} md={3} sm={6} xs={12}>
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
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <TextField
                  id="endereco"
                  name="endereco"
                  helperText={touched.endereco ? errors.endereco : ""}
                  error={touched.endereco && Boolean(errors.endereco)}
                  label="Endereço"
                  onChange={change.bind(null, "endereco")}
                  value={endereco}
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item lg={3} md={3} sm={3} xs={12}>
                <TextField
                  id="numero"
                  name="numero"
                  helperText={touched.numero ? errors.numero : ""}
                  error={touched.numero && Boolean(errors.numero)}
                  label="Número"
                  onChange={change.bind(null, "numero")}
                  value={numero}
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item lg={4} md={9} sm={9} xs={12}>
                <TextField
                  id="complemento"
                  name="complemento"
                  label="Complemento"
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item lg={3} md={3} sm={6} xs={12}>
                <TextField
                  id="cidade"
                  name="cidade"
                  label="Cidade"
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item lg={2} md={3} sm={6} xs={12}>
                <TextField
                  id="estado"
                  name="estado"
                  label="Estado"
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <TextField
                  id="nacionalidade"
                  name="nacionalidade"
                  helperText={touched.nacionalidade ? errors.nacionalidade : ""}
                  error={touched.nacionalidade && Boolean(errors.nacionalidade)}
                  label="Nacionalidade"
                  onChange={change.bind(null, "nacionalidade")}
                  value={nacionalidade}
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item lg={12} md={12}>
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
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Form;
