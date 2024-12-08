import Botao from "./Botao"
import "./Tabela.css"
import jogo from "./jogo"



function Tabela(){
    return(
        <div className = "container">
            <div className="cel">
                <Botao  id="0"/>
            </div>
            <div className="cel">
                <Botao  id="1"/>
            </div>
            <div className="cel">
                <Botao  id="2"/>
            </div>
            <div className="cel">
                <Botao  id="3"/>
            </div>
            <div className="cel">
                <Botao  id="4"/>
            </div>
            <div className="cel">
                <Botao  id="5"/>
            </div>
            <div className="cel">
                <Botao  id="6"/>
            </div>
            <div className="cel">
                <Botao  id="7"/>
            </div>
            <div className="cel">
                <Botao  id="8"/>
            </div>
        </div>
    )
}

export default Tabela