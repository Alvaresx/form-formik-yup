import React from "react";
import { TextField, Grid } from "@mui/material";

function Form() {
  return (
    <form onSubmit={() => {}}>
      <Grid container spacing={2}>
        <Grid item lg={12}>
          <TextField
            id="nome"
            name="nome"
            label="Nome completo"
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item lg={3}>
          <TextField
            id="dataNascimento"
            name="dataNascimento"
            label="Data de nascimento"
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item lg={3}>
          <TextField
            id="telefone"
            name="telefone"
            label="Telefone celular"
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item lg={3}>
          <TextField
            id="email"
            name="email"
            label="E-mail"
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
        <Grid item lg={4}>
          <TextField
            id="rg"
            name="rg"
            label="Documento de identidade"
            fullWidth
            size="small"
          />
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
          <TextField id="cpf" name="cpf" label="CPF" fullWidth size="small" />
        </Grid>
        <Grid item lg={3}>
          <TextField id="cep" name="cep" label="CEP" fullWidth size="small" />
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
        <Grid item lg={3}>
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
        <Grid item lg={3}>
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
      </Grid>
    </form>
  );
}

export default Form;
