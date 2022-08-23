import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import api from "../../services/Api";
import "./styles.css";
import PopUpAdicionarContato from "./Componentes/PopUpCadastrar";
import CardContatos from "./Componentes/CardContatos";
import { Card, CardContent } from "@mui/material";

const Home = () => {

  const [contatos, setContatos] = useState([]);
  const [abrirPopUp, setAbrirPopUp] = useState(false);

  useEffect(() => {
  
  })

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
          <Grid container item xs={8} justifyContent={"center"}>
            <p className="titulo-lista">Lista de Contatos</p>
          </Grid>
          <Grid
            container
            item
            xs={4}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Button className="botao-adicionar" variant="contained" onClick={() => setAbrirPopUp(true)}>
              Adicionar contato
            </Button>

            <PopUpAdicionarContato 
              abrirPopUp={abrirPopUp}
              setAbrirPopUp={setAbrirPopUp}
            />

          </Grid>
        </Grid>

        <div className="divider"></div>

        {/* {
          contatos.map((contato, index) => {
              return (
                <Grid container sx={{mx: 3, my: 4}}>
                  <CardContatos 
                    index={index}
                    contato={contato}
                  />
                </Grid>
              )
          })
        } */}
        

      </div>
    </div>
  );
};

export default Home;
