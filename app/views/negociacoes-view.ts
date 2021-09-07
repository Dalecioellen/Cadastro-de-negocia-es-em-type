import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js"

export class NegociacoesView extends View<Negociacoes>{

  protected template(model: Negociacoes): string {
    return `
        <table class="table table-hover table-bordered">

        <thead>
        <tr>
        <th>Data</th>
        <th>Quantidade</th>
        <th>Valor</th>
        </tr>
        </thead>
        <tbody>
        ${model.lista().map(n => {
      return `
            <tr>
            <td>${this.formatar(n.data)}</td>
            <td>${n.quantidade}</td>
            <td>${n.valor}</td>
            </tr>
          `;
    }).join('')}
        </tbody>
        </table>       
        ` ;
  }
  private formatar(data: Date): string {
    return new Intl.DateTimeFormat().format(data)
  }
}
