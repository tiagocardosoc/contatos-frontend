import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import React from 'react';
import Home from "./componentes/Home";
import Login from "./componentes/Login";
import { autenticarToken, logout } from './services/Authentication';

export default function Rotas() {
  
  
  const RotaPrivada = ({ Componente }) => {
    const navigate = useNavigate()
    if (autenticarToken()) {
      return (
        <Componente />
      )
    } else {
      logout();
      return navigate('/')
    }
  }

    return (
      <BrowserRouter>
        <Routes>
            <Route path='/' exact={true} element={<Login/>} />
            {/* <Route path='/home' element={<Home/>} /> */}
            <Route path='/home' element={<RotaPrivada Componente={Home}/>} />
        </Routes>
      </BrowserRouter>
    )
  }