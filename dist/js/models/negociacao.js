export class Negociacao {
    constructor(quantidade, _data, valor) {
        this.quantidade = quantidade;
        this._data = _data;
        this.valor = valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    static criaDe(dataString, quantidadeString, valorString) {
        const ex = /-/g;
        const date = new Date(dataString.replace(ex, ","));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(quantidade, date, valor);
    }
}
