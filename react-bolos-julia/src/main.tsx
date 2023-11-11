import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

//componentes
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'


//rotas
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CadastroBolo from './pages/CadastroBolo'
import ListaBolo from './pages/ListaBolo'

//BrowserRouter -> indica que tera uma config de rotas
//Routes -> indica que tera uma lista de route
//Route -> indica uma rota de um respectivo componente

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />{/*1*/}
      <Routes>{/*2*/}
        <Route>
          <Route path='/' element={<Home/>} /> {/*pagina principal*/}
          <Route path='cadastro/bolo' element={<CadastroBolo/>} /> {/*pagina cafdastro*/}
          <Route path='lista/bolo' element={<ListaBolo/>} /> {/*pagina Lista de Bolos*/}
        </Route>
      </Routes>
      <Footer />{/*3*/}
    </BrowserRouter>
  </React.StrictMode>,
  //para indicar erros
)

