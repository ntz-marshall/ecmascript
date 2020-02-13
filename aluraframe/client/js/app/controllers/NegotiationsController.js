class NegotiationsController {

    constructor() {
        let $ = document.querySelector.bind(document)
        // .bind atrela o querySelector ao document, masmo passando ele para $, fazendo com que essa representação funcione
        this.inputDate = $("#data")
        this.inputQtt = $("#quantidade")
        this.inputValue = $("#valor")
    }
  
  
    addict(event) {

        event.preventDefault();

        console.log(this.inputDate.value)
        console.log(this.inputQtt.value)
        console.log(this.inputValue.value)
    }
}