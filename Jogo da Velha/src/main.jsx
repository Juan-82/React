import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Tabela from "./Tabela"

import Vitoria from './vitoria/Vitoria'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <center><h1>Jogo da Velha</h1></center>
    <hr/><br /><br />
    


    <Tabela/>
    <Vitoria/>




  </StrictMode>,
)
