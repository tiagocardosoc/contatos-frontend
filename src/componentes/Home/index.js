import React, { useCallback, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import api from "../../services/Api";
import "./styles.css";
import PopUpAdicionarContato from "./Componentes/PopUpCadastrar";
import CardContatos from "./Componentes/CardContatos";

const Home = () => {
  const [abrirPopUp, setAbrirPopUp] = useState(false);
  const [contatos, setContatos] = useState([]);

  useEffect(() => {
    const listarContatos = async () => {
      const resultado = await api.get("/listar-contatos");

      if (resultado.status === 200) {
        setContatos(resultado.data.contatos);
      }
    }
    listarContatos();
  }, [])



  return (
    <div className="div-container">
      <div className="div-titulo">
        <p className="titulo-home">Agenda de Contatos</p>
      </div>

      <div className="div-conteudo">
        <Grid
          container
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ paddingTop: "10px" }}
        >
          <Grid container item xs={12} sm={6} justifyContent={"center"}>
            <p className="titulo-lista">Lista de Contatos</p>
          </Grid>
          <Grid
            className="grid-botao-adicionar"
            container
            item
            xs={12} sm={6}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Button
              className="botao-adicionar"
              variant="contained"
              onClick={() => setAbrirPopUp(true)}
            >
              Adicionar contato
            </Button>

            <PopUpAdicionarContato
              abrirPopUp={abrirPopUp}
              setAbrirPopUp={setAbrirPopUp}
              setContatos={setContatos}
            />
          </Grid>
        </Grid>

        <div className="divider"></div>

        {
          contatos.map((contatos, index) => {
              return (
                <div className="div-conteudo-map" key={index}>
                  <CardContatos 
                    contatos={contatos}
                    setContatos={setContatos}
                  />
                </div>
              )
          })
        }
        
      </div>
    </div>
  );
};

export default Home;
