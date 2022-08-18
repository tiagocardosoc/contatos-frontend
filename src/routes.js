import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
import Home from "./componentes/Home";
import Login from "./componentes/Login";

export default function Rotas() {

    return (
      <BrowserRouter>
        <Routes>
            <Route path='/' exact={true} element={<Login/>} />
            <Route path='/home' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    )
  }