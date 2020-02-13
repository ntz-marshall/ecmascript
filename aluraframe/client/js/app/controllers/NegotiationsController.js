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

        const date = new Date(this._inputDate.value.replace(/-/g, ',')) // exp reg global que troca o - por ,

       let negotiations = new Negotiations(
           date,
            this._inputQtt.value,
            this._inputValue.value)
            console.log(negotiations)
    }
}