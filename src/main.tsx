import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter } from "react-router-dom"

//import App from './App.tsx'
import './index.css'
import Header from './Componentes/Header'
import Home from './pages/Home'
import Footer from './Componentes/Footer'
import Servicos from './pages/ListaServicos/index'
// import Teste from './pages/Teste' 

// import CadastroDev from './pages/CadastroDev'
import ListaDev from './pages/ListaDev'
import PerfilUsuario from './pages/PerfilUsuario'
import VisualizarServico from './pages/VisualizarServico'
import CadastroUsuario from './pages/CadastroUsuario'
import CadastroServico from './pages/CadastroServico'
import Login from './pages/Login'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
          <Routes>
            <Route>

              <Route path='/' element={<Home />}/>
              <Route path='ListaServicos' element={ <Servicos />}></Route>
              <Route path='ListaDev' element={<ListaDev/>}></Route>
              <Route path='perfil/:idUsuario' element={<PerfilUsuario/>}/>
              <Route path='VisualizarServicos' element={<VisualizarServico/>}> </Route>
              <Route path='CadastroUsuario' element={<CadastroUsuario/>}> </Route>
              <Route path='cadastroServico' element={<CadastroServico/>}> </Route>
              <Route path='login' element={<Login/>}> </Route>


              {/* <Route path='CadastroDev' element={<CadastroDev/>}></Route> */}
            </Route>
        </Routes>
      <Footer/>  {/* comentar o footer para testar o CadastroDev! */}
     
    </BrowserRouter>
   </React.StrictMode>,
)
