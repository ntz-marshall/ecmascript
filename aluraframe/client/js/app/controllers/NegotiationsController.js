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

			// Chamando diretamente na classe o método
			let negotiations = new Negotiations(DateHelper.stringToDate(this._inputDate.value),	this._inputQtt.value, this._inputValue.value)
			
			console.log(negotiations)
			console.log(DateHelper.dateToString(negotiations.data))
		}
}