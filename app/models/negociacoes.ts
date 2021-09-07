import { Negociacao } from "./negociacao";

export class Negociacoes {

    private _negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao) {
        this._negociacoes.push(negociacao);
        //Adiciona nova negociação a lista
    }

    //ReadOnlyArray não permite alterar a lista 

    lista(): ReadonlyArray<Negociacao> {
        return this._negociacoes;
    }
    // retorna a lista de negociações
}

