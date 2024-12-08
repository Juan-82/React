import Escolheu from "./Escolheu"
import { useState } from "react"
import './Botao.css'

function Botao({ id }){
    const [caminho, setCaminho] = useState("../public/vazio.png")
    return (
        <div className="cima">
            <button ><img src={caminho} width={80} onClick={()=>{
                if(caminho == "../public/vazio.png"){
                    setCaminho(Escolheu(id))
                }
            }}/></button>
        </div>
    )
}


export default Botao;