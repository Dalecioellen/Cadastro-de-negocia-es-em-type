import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { DiasdaSemana } from "../Enums/dias-da-semana.js";



export class NegociacaoController {


  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView('#negociacoesView', true);
  private mensagemView = new MensagemView('#mensagemView')
  readonly Sabado = 6;
  readonly Domingo = 0;


  constructor() {
    this.inputData = document.querySelector('#data') as HTMLInputElement; 
    this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement; 
    this.inputValor = document.querySelector('#valor') as HTMLInputElement; 
    this.negociacoesView.update(this.negociacoes); 
  }

  //O as HTMLInputElement garante que o retorno será HTMLInputElement.

  public adiciona(): void {

    const negociacao = Negociacao.criaDe(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value);

    if (!this.DiaUtil(negociacao.data)) {
      this.mensagemView.update('Negociações permitidas apenas em dias úteis!')
      return;
    }
    this.negociacoes.adiciona(negociacao);
    this.negociacoes.lista();
    this.negociacoesView.update(this.negociacoes);
    this.mensagemView.update('Negociação adicionada com sucesso');
    this.limparFormulario();
  }

  private DiaUtil(data: Date) {
    return data.getDay() > DiasdaSemana.DOMINGO && data.getDay() < DiasdaSemana.SABADO
  }


  private limparFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
    this.inputData.focus();
  }
};

