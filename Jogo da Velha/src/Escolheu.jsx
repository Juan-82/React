import jogo from "./jogo"


var vez = 1
function Escolheu(id){
    if (jogo[id] == ""){
        jogo[id] = (vez == 1) ? "X" : "O"
        vez = (vez == 1) ? 2 : 1
        return (vez == 1) ? "../public/circulo-azul.png" : "../public/x-vermelho.png"
    }
}

export default Escolheu
