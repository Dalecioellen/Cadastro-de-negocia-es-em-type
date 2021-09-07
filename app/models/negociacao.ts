export class Negociacao {
    constructor(
        public readonly quantidade: number,
        private _data: Date,
        public readonly valor: number
    ) { }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string) {
        const ex = /-/g;
        const date = new Date(dataString.replace(ex, ","));
        const quantidade = parseInt(quantidadeString); 
        const valor = parseFloat(valorString); 
        return new Negociacao(quantidade, date, valor);
    }
}

//OBS: Usando EcmaScript6 podemos declarar os atributos obrigatórios já dentro do construtor
