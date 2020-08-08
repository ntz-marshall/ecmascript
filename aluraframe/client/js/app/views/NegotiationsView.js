/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
class NegotiationsView extends View {
  // criamos uma herança a partir da palavra extends NomeClasse

  constructor(element) {
      super(element)
      // super de super classe se comunica com a classe herdada
  }
  template(model) {

      return ` <table class="table table-hover table-bordered">
      <thead>
          <tr>
              <th>DATA</th>
              <th>QUANTIDADE</th>
              <th>VALOR</th>
              <th>VOLUME</th>
          </tr>
      </thead>

      <tbody>
      ${model.negotiations.map(n =>  `
            <tr>
                <td>${DateHelper.dateToString(n.data)}</td>
                <td>${n.quantidade}</td>
                <td>${n.valor}</td>
                <td>${n.volume}</td>
            </tr>`).join('')}
      </tbody>

      <tfoot>
          <td colspan="3"></td>
          <td>
            ${model.volumeTotal}
          </td>
      </tfoot>
  </table> ` 
  }
}