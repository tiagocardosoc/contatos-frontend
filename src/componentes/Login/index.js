import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";
import InputAdornment from "@mui/material/InputAdornment";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { CgEnter } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import "./styles.css";
import { Alert } from "@mui/material";
import api from "../../services/Api";
import { getToken, setToken } from "../../services/Authentication";


const axios = require('axios');

const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [emailInvalido, setEmailInvalido] = useState(false);
  const [senha, setSenha] = useState("");
  const [senhaInvalida, setSenhaInvalida] = useState(false);
  const [verSenha, setVerSenha] = useState(true);

  const handleChangeVerSenha = () => {
    if (verSenha === false) {
      setVerSenha(true);
    } else {
      setVerSenha(false);
    }
  };

  const botaoEntrar = async () => {

    //   navigate("/home");
    

    if (email === undefined || email === '') {
        setEmailInvalido(true);
        return (
            <Alert severity="error">
                Email inválido.
            </Alert>
        )
    }

    if (senha === undefined || senha === '') {
        setSenhaInvalida(true);
        return (
            <Alert severity="error">
                Senha inválida.
            </Alert>
        )
    }

    try {
        const resposta = await api.post('/login-usuario', {email, senha});
        if (resposta.status === 200) {
            setToken(resposta.data.token);
            navigate('/home');
        }
    } catch(erro) {
        console.log(erro)
    }
  };



  return (
    <div>
      <div className="layout-login">
        <Card sx={{ width: "500px", height: "auto" }}>
          <CardContent>
            <Grid container justifyContent={"center"} alignItems={"center"}>
              <h2>Faça seu login</h2>
            </Grid>
            <Grid
              container
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <TextField
                value={email}
                label="Usuário"
                required
                variant="outlined"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                size="small"
                style={{
                  width: "70%",
                  marginBottom: "20px",
                }}
                error={emailInvalido}
              />
              <TextField
                value={senha}
                label="Senha"
                type={verSenha ? "password" : "text"}
                required
                variant="outlined"
                onChange={(e) => {
                  setSenha(e.target.value);
                }}
                size="small"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton edge="end" onClick={handleChangeVerSenha}>
                        {verSenha ? <BsEyeFill /> : <BsEyeSlashFill />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                style={{
                  width: "70%",
                  marginBottom: "20px",
                }}
                error={senhaInvalida}
              />
            </Grid>
            <Grid container justifyContent={"center"}>
              <Button
                className="botao-entrar"
                variant="contained"
                endIcon={<CgEnter />}
                onClick={() => botaoEntrar()}
              >
                Entrar
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
