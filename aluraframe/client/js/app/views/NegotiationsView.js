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
            <td colspan="3"></td>
            <td>${model.negotiations.reduce((total, n) => total + n.volume, 0.0)                
                //(() => {
                // Utilizaremos uma Immediately-invoked function expression (IIFE) ou a função imediata.
                //let total = 0;
                //model.negociacoes.forEach(n => total+= n.volume);
                //return total;
                //})()
            }</td>
        </tfoot>
    </table> ` 
    }

    update(model) {
        this._element.innerHTML = this._template(model)
    }
}