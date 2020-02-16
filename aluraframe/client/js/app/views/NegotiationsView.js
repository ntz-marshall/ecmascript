/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
class NegotiationsView {

    constructor(element) {
        this._element = element
    }

    _template(model) {

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
        </tfoot>
    </table> ` 
    }

    update(model) {
        this._element.innerHTML = this._template(model)
    }
}