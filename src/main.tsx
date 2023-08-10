import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter } from "react-router-dom"

//import App from './App.tsx'
import './index.css'
import Header from './Componentes/Header'
import Home from './pages/Home'
import Footer from './Componentes/Footer'
// import Servicos from './pages/Servicos/index'

import CadastroDev from './pages/CadastroDev'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route>

        </Route>

      </Routes>
      <Footer/>  {/* comentar o footer para testar o CadastroDev! */}
      <Home/>
      <CadastroDev/>
      
    </BrowserRouter>
   </React.StrictMode>,
)
