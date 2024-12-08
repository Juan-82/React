import { useState } from "react"
import './Vitoria.css'
import jogo from "../jogo"

function TelaFinal(){
    return(
        <div className="completo">
            <h1>Fim.</h1>
        </div>
    )
}


function Vitoria(){
    console.log("Iniciou")
    const [classe, setClasse] = useState("nada")

    return(
        <div >
            <div onMouseMove={()=>{
                if (verificaVitoria()){
                    setClasse("tudo")
                }
            } }className="out">
            </div>
            <div className={classe}>
                <TelaFinal/>
            </div> 
        </div>
    )
}


export const verificaVitoria = () => {
    console.log("Chamou")
    for(let i=0; i < 9; i+=3){
        if('' != jogo[i] && jogo[i] == jogo[i+1] && jogo[i] == jogo[i+2]){
            console.log("venceu", jogo)
            return true
        }
    }
    for(let i=0; i < 3; i+=1){
        if('' != jogo[i] && jogo[i] == jogo[i+3] && jogo[i] == jogo[i+6]){
            console.log("venceu", jogo)
            return true
        }
    }
    if('' != jogo[0] && jogo[0] == jogo[4] && jogo[0] == jogo[8]){
        return true
    }
    if('' != jogo[2] && jogo[2] == jogo[4] && jogo[2] == jogo[6]){
        return true
    }
    var cont = 0
    for(let i=0; i < 9; i++){
        if(jogo[i] != ''){
            cont += 1
        }
    }
    if(cont == 9){
        return true
    }
    return false
}

export default Vitoria