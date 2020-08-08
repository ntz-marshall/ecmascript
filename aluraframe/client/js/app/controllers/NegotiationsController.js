// eslint-disable-next-line no-unused-vars
class NegotiationsController {

  constructor() {

    let $ = document.querySelector.bind(document)
    // .bind atrela o querySelector ao document, masmo passando ele para $, fazendo com que essa representação funcione
    this._inputDate = $("#data")
    this._inputQtt = $("#quantidade")
    this._inputValue = $("#valor")
    
    this._negotiationsLists = new Bind(
      new NegotiationsLists(),
      new NegotiationsView($('#negotiationsView')),
      'add', 'removeNegotiations')
    
    this._message = new Bind(
      new Message(),
      new MessageView($('#msgView')),
      'text')
    
  }
    /*
    O this de uma função é dinâmico, isto é, seu valor é determinado no momento em que a função é chamada. Como o this é dinâmico, é possível usar artifícios da linguagem, como a API Reflect, para alterá-lo se assim desejarmos. 
    */

  add(event) {

    event.preventDefault()		
    this._negotiationsLists.add(this._createNegotiation())
    this._message.text = 'Negociação adicionada com sucesso!'
    this._clearForm()
  }
  
  importNegotiations() {
    let service = new NegotiationService()
    
    let promise = service.getWeekNegotiation()
    promise.then(negotiations => {
                negotiations.forEach(negotiation => this._negotiationsLists.add(negotiation))
                this._message.text = 'Negociações da semana importadas com sucesso!'})
            .catch(error =>)
    /*
    service.getWeekNegotiation((err, negotiations) =>{
      if(err) {
        this._message.text = err
        return
      }
      negotiations.forEach(negotiation => this._negotiationsLists.add(negotiation))
      this._message.text = 'Negociações da semana importadas com sucesso!'
    })
    
    service.getLastWeekNegotiation((err, negotiations) =>{
      if(err) {
        this._message.text = err
        return
      }
      negotiations.forEach(negotiation => this._negotiationsLists.add(negotiation))
      this._message.text = 'Negociações da semana anterior importadas com sucesso!'
    })
    
    service.getRetreatWeekNegotiation((err, negotiations) =>{
      if(err) {
        this._message.text = err
        return
      }
      negotiations.forEach(negotiation => this._negotiationsLists.add(negotiation))
      this._message.text = 'Negociações da semana retrasada importadas com sucesso!'
    }) */
  }
  
  /*
    0: requisição ainda não iniciada
    
    1: conexão com o servidor estabelecida
    
    2: requisição recebida
    
    3: processando requisição
    
    4: requisição concluída e a resposta esta pronta
  */
  
  clear() {
    this._negotiationsLists.removeNegotiation()
    this._message.text = 'Negociações apagadas com sucesso!'
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


/* Exemplo de uso de proxy

let pessoa = new Proxy(new Pessoa('Barney'), {

        get(target, prop, receiver) {
            if(prop == 'grita' && typeof(target[prop]) == typeof(Function)) {
         // essa função retornada irá substituir o método 'grita' no proxy!!! Ou seja, estamos usando o handler do proxy para modificar o próprio proxy, que loucura!
                return function() {
                    console.log(`Método chamado: ${prop}`);    
                    // Quando usarmos Reflect.apply, Reflect.get e Reflect.set precisamos retornar o resultado da operação com return
                    // arguments é uma variável implícita que dá acesso à todos os parâmetros recebidos pelo método/função
                    return Reflect.apply(target[prop], target, arguments);       
                }
            }
            // só executa se não for função
            return Reflect.get(target, prop, receiver);
        }
    });

   pessoa.grita('Olá');
   
   */