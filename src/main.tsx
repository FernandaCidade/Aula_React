import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.tsx'
import './index.css'
import Home from './pages/Home'
import Servicos from './pages/Servicos/index'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Servicos />
  </React.StrictMode>,
)
