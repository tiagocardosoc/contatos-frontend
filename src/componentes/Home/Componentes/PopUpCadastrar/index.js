import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { Alert, AlertTitle, Grid, TextField } from "@mui/material";
import "./styles.css";
import api from "../../../../services/Api";

const PopUpAdicionarContato = ({ abrirPopUp, setAbrirPopUp, setContatos }) => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [mensagemErro, setMensagemErro] = useState(false);

  const clickCadastrarContato = () => {
    if (nome === "" || nome === undefined) {
      setMensagemErro(true);
    }
    if (sobrenome === "" || sobrenome === undefined) {
      setMensagemErro(true);
    }
    if (telefone === "" || telefone === undefined) {
      setMensagemErro(true);
    }
    if (email === "" || email === undefined) {
      setMensagemErro(true);
    }
    if (endereco === "" || endereco === undefined) {
      setMensagemErro(true);
    }
    if (dataNascimento === "" || dataNascimento === undefined) {
      setMensagemErro(true);
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
          const listarContatos = async () => {
            const resultado = await api.get("/listar-contatos");
      
            if (resultado.status === 200) {
              setContatos(resultado.data.contatos);
            }
          }
          listarContatos();
          setAbrirPopUp(false);          
           return (
           <Alert severity="success">
            <AlertTitle>Sucesso</AlertTitle>
            O cadastro foi efetuado com sucesso.
          </Alert>
          );
        } else {
          return (
          <Alert severity="error">
            <AlertTitle>Erro</AlertTitle>
            O cadastro não pôde ser concluído, tente novamente.
          </Alert>
          )
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
          spacing={1}
        >
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              style={{marginBottom:'20px'}}
              size="small"
              label="Nome"
              onChange={(e) => setNome(e.target.value)}
              error={mensagemErro}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              style={{marginBottom:'20px'}}
              size="small"
              label="Sobrenome"
              onChange={(e) => setSobrenome(e.target.value)}
              error={mensagemErro}
            />
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={1}
        >
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              style={{marginBottom:'20px'}}
              size="small"
              label="Telefone"
              onChange={(e) => setTelefone(e.target.value)}
              error={mensagemErro}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
              fullWidth
              style={{marginBottom:'20px'}}
              size="small"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              error={mensagemErro}
                />
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={1}
        >
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              style={{marginBottom:'20px'}}
              size="small"
              label="Endereço"
              onChange={(e) => setEndereco(e.target.value)}
              error={mensagemErro}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              style={{marginBottom:'20px'}}
              size="small"
              label="Data de nascimento"
              onChange={(e) => setDataNascimento(e.target.value)}
              error={mensagemErro}
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
