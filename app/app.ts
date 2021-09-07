import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { Negociacoes } from "./models/negociacoes.js";

var controller = new NegociacaoController();
var form = document.querySelector('.form')
if(form){
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});
}else{
    throw Error('Não foi possível inicializar a aplicação! Verifique se o elemento buscado não é nulo')
}

