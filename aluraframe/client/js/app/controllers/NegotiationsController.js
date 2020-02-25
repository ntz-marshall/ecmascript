// eslint-disable-next-line no-unused-vars
class NegotiationsController {

		constructor() {

				let $ = document.querySelector.bind(document)
				// .bind atrela o querySelector ao document, masmo passando ele para $, fazendo com que essa representação funcione
				this._inputDate = $("#data")
				this._inputQtt = $("#quantidade")
        this._inputValue = $("#valor")
        let self = this
				// eslint-disable-next-line no-undef
				this._negotiationsLists = new Proxy(new NegotiationsLists(), {
					get(target, prop, receiver) {
						if(['add', 'removeNegotiation'].includes(prop) && typeof(target[prop]) == typeof(Function)) {
							return function () {
                console.log(`interceptando ${prop}`)
                Reflect.apply(target[prop], target, arguments)
                self._negotiationsView.update(target)
							}
						}
						return Reflect.get(target, prop, receiver)
					}
				});
				// eslint-disable-next-line no-undef
				this._negotiationsView = new NegotiationsView($('#negotiationsView'))
				this._negotiationsView.update(this._negotiationsLists)
				// eslint-disable-next-line no-undef
				this._message = new Message()
				// eslint-disable-next-line no-undef
				this._messageView = new MessageView($('#msgView'))
				this._messageView.update(this._message)
		}
		/* O this de uma função é dinâmico, isto é, seu valor é determinado no momento em que a função é chamada. Como o this é dinâmico, é possível usar artifícios da linguagem, como a API Reflect, para alterá-lo se assim desejarmos. */
	
		add(event) {

			event.preventDefault()		
			this._negotiationsLists.add(this._createNegotiation())
			
			this._message.text = 'Negociação adicionada com sucesso!'
			this._messageView.update(this._message)
			
			this._clearForm()
		}
		clear() {
			this._negotiationsLists.removeNegotiation()

			this._message.text = 'Negociações apagadas com sucesso!'
			this._messageView.update(this._message)
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