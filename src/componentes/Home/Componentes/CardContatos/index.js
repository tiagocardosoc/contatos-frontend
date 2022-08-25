import { Alert, AlertTitle, Grid, IconButton, useMediaQuery } from "@mui/material";
import React from "react";
import {AiFillDelete} from 'react-icons/ai'
import api from "../../../../services/Api";
import './styles.css';

const CardContatos = ({ contatos, setContatos }) => {

    const ate950px = useMediaQuery('(max-width: 900px)')

    const onClickDeletar = async () => {
        try {
            const resultado = await api.delete(`/deletar-contato/${contatos._id}`);

            if (resultado.status === 200) {
                const listarContatos = async () => {
                    const resultado = await api.get("/listar-contatos");
              
                    if (resultado.status === 200) {
                      setContatos(resultado.data.contatos);
                    }
                  }
                  listarContatos();
                return (
                    <Alert severity="success">
                     <AlertTitle>Sucesso</AlertTitle>
                     O cadastro foi efetuado com sucesso.
                   </Alert>
                )
            }
            
        } catch(erro) {
            console.log(erro)
        }
    }


  return (
    <Grid
      container
      width={"85%"}
      sx={{ mx: "5px", my: "3px", backgroundColor: "rgb(133, 186, 231)", border: '1px', borderRadius: '10px'}}
    >
        <Grid container item xs={12} sm={11}>
            <Grid container justifyContent={'center'} sx={{ mx: 1 }}>
                <Grid container item xs={12} md={4} flexDirection={ ate950px ? 'row' : 'column'} justifyContent={'center'} alignItems={'center'} sx={{my: 1}}>
                    <span className="card-prop-titulo">Nome:</span>
                    <span className="card-dados">{contatos.nome + ' ' + contatos.sobrenome}</span>
                </Grid>
                <Grid container item xs={12} md={4} flexDirection={ate950px ? 'row' : 'column'} justifyContent={'center'} alignItems={'center'}>
                    <span className="card-prop-titulo">Telefone:</span>
                    <span className="card-dados">{contatos.telefone}</span>
                </Grid>
                <Grid container item xs={12} md={4} flexDirection={ate950px ? 'row' : 'column'} justifyContent={'center'} alignItems={'center'}>
                    <span className="card-prop-titulo">Email:</span>
                    <span className="card-dados">{contatos.email}</span>
                </Grid>
            </Grid>
            <Grid container justifyContent={'center'} sx={{ mx: 1 }}>
                <Grid container item xs={12} md={6} flexDirection={ate950px ? 'row' : 'column'} justifyContent={'center'} alignItems={'center'} sx={{my: 1}}>
                    <span className="card-prop-titulo">Data de nascimento:</span>
                    <span className="card-dados">{contatos.nome + ' ' + contatos.sobrenome}</span>
                </Grid>
                <Grid container item xs={6} md={6} flexDirection={'row'} justifyContent={'center'} alignItems={'center'} textAlign={'center'}>
                    <span className="card-prop-titulo-endereco" style={{marginRight: '7px'}}>Endereço:</span>
                    <span className="card-dados">{contatos.endereco}</span>          
                </Grid>
            </Grid>
      </Grid>
      <Grid container item xs={12} sm={1} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
        <IconButton style={{color:'white'}} onClick={() => onClickDeletar()}>
          <AiFillDelete/>
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default CardContatos;
