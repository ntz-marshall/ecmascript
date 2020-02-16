// eslint-disable-next-line no-unused-vars
class NegotiationsController {

		constructor() {

				let $ = document.querySelector.bind(document)
				// .bind atrela o querySelector ao document, masmo passando ele para $, fazendo com que essa representação funcione
				this._inputDate = $("#data")
				this._inputQtt = $("#quantidade")
				this._inputValue = $("#valor")
				// eslint-disable-next-line no-undef
				this._negotiationsLists = new NegotiationsLists()
				// eslint-disable-next-line no-undef
				this._negotiationsView = new NegotiationsView($('#negotiationsView'))

				this._negotiationsView.update(this._negotiationsLists)
		}
	
		add(event) {

			event.preventDefault()		
			this._negotiationsLists.add(this._createNegotiation())
			this._negotiationsView.update(this._negotiationsLists)
			this._clearForm()
		}

		_createNegotiation() {
			// Chamando diretamente na classe o método	
			// eslint-disable-next-line no-undef
			return new Negotiations(DateHelper.stringToDate(this._inputDate.value),	this._inputQtt.value, this._inputValue.value)
		}

		_clearForm() {
			
			this._inputDate.value = ''
			this._inputQtt.value = 1
			this._inputValue.value = 0.0

			this._inputDate.focus()
		}
}