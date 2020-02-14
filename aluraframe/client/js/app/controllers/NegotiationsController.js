class NegotiationsController {

		constructor() {

				let $ = document.querySelector.bind(document)
				// .bind atrela o querySelector ao document, masmo passando ele para $, fazendo com que essa representação funcione
				this._inputDate = $("#data")
				this._inputQtt = $("#quantidade")
				this._inputValue = $("#valor")
		}
	
		addict(event) {

				event.preventDefault()

			 //const date = new Date(this._inputDate.value.replace(/-/g, ',')) exp reg global que troca o - por ,
			 // mesmo usando apenas a exp reg não havia erro de data.
			 let date = new Date(...this._inputDate.value.split('-').map((item, indice) => item - indice % 2 )) // arrow function já faz o return e se for apenas uma linha pode-se omitir o bloco
						// if (indice == 1) {return item -1}
						// indice 0 % 2 é 0 então não há subtração, indice 1 % 2 é 1 então há subtração, indice 2 % 2 é 0.
			 let negotiations = new Negotiations(
					 date,
						this._inputQtt.value,
						this._inputValue.value)
						console.log(negotiations)
		}
}