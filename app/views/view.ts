export abstract class View<T> {


    protected elemento: HTMLElement;
    private escapar = false;

    constructor(seletor: string, escapar?: boolean) { // seletor recebe a classe onde injetaremos o template

        const elemento = document.querySelector(seletor) //elemento recebe o seletor
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`seletor${seletor} não existe no DOM`)
        }

        if (escapar) {
            this.escapar = escapar;
        }
    }
    //atualiza a view com uma nova negociação
    update(model: T): void {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
            //remove tags scripts maliciosas do template
        }

        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;

}