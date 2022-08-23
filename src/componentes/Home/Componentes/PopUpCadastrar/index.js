import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { Alert, Grid, TextField } from "@mui/material";
import "./styles.css";
import api from "../../../../services/Api";

const PopUpAdicionarContato = ({ abrirPopUp, setAbrirPopUp }) => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");

  const clickCadastrarContato = () => {
    if (nome === "" || nome === undefined) {
      setMensagemErro("O nome precisa ser preenchido.");
    }
    if (sobrenome === "" || sobrenome === undefined) {
      setMensagemErro("O sobrenome precisa ser preenchido.");
    }
    if (telefone === "" || telefone === undefined) {
      setMensagemErro("O telefone precisa ser preenchido.");
    }
    if (email === "" || email === undefined) {
      setMensagemErro("O email precisa ser preenchido.");
    }
    if (endereco === "" || endereco === undefined) {
      setMensagemErro("O endereco precisa ser preenchido.");
    }
    if (dataNascimento === "" || dataNascimento === undefined) {
      setMensagemErro("A data de nascimento precisa ser preenchida.");
    }

    const efetuarCadastro = async () => {
      try {
        const resultado = await api.post("/cadastrar-contato", {
          nome,
          sobrenome,
          telefone,
          dataNascimento,
          endereco,
          email,
        });
        if (resultado.status === 200) {
          Alert("O cadastro foi efetuado com sucesso");
          setAbrirPopUp(false);
        } else {
          Alert("O cadastro não pode ser efetuado, tente novamente.");
        }
      } catch (erro) {
        console.log(erro);
      }
    };

    efetuarCadastro();

  };

  return (
    <Dialog
      maxWidth={"lg"}
      open={abrirPopUp}
      onClose={() => setAbrirPopUp(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Cadastrar Contato"}</DialogTitle>
      <DialogContent>
        <Grid
          container
          item
          xs={12}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={2}
        >
          <Grid item xs={6}>
            <TextField
              fullWidth
              margin="normal"
              size="small"
              label="Nome"
              onChange={(e) => setNome(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              margin="normal"
              size="small"
              label="Sobrenome"
              onChange={(e) => setSobrenome(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={2}
        >
          <Grid item xs={6}>
            <TextField
              fullWidth
              margin="normal"
              size="small"
              label="Telefone"
              onChange={(e) => setTelefone(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth margin="normal" size="small" label="Email" />
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={2}
        >
          <Grid item xs={6}>
            <TextField
              fullWidth
              margin="normal"
              size="small"
              label="Endereço"
              onChange={(e) => setEndereco(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              margin="normal"
              size="small"
              label="Data de nascimento"
              onChange={(e) => setDataNascimento(e.target.value)}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Grid
          container
          justifyContent={"flex-end"}
          alignItems={"center"}
          sx={{ mx: 2 }}
        >
          <Button className="botao-cadastrar" variant="contained" onClick={clickCadastrarContato}>
            Cadastrar
          </Button>
        </Grid>
      </DialogActions>
    </Dialog>
  );
};

export default PopUpAdicionarContato;
