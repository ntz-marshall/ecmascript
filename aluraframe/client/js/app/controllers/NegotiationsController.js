class NegotiationsController {

		constructor() {

				let $ = document.querySelector.bind(document)
				// .bind atrela o querySelector ao document, masmo passando ele para $, fazendo com que essa representação funcione
				this._inputDate = $("#data")
				this._inputQtt = $("#quantidade")
				this._inputValue = $("#valor")
				this._negotiationsLists = new NegotiationsLists()
		}
	
		addict(event) {

			event.preventDefault()
		
			this._negotiationsLists.addict(this._createNegotiation)
			this._clearForm()
			console.log(this._negotiationsLists.negotiations)
			
		}

		_createNegotiation() {
			// Chamando diretamente na classe o método	
			return new Negotiations(DateHelper.stringToDate(this._inputDate.value),	this._inputQtt.value, this._inputValue.value)
		}

		_clearForm() {
			
			this._inputDate.value = ''
			this._inputQtt.value = 1
			this._inputValue.value = 0.0

			this._inputDate.focus()
		}
}