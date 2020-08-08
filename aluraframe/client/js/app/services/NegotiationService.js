class NegotiationService {
  
  getWeekNegotiation(cb) {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', 'negociacoes/semana')
    xhr.onreadystatechange = () => {
      
      if(xhr.readyState == 4) {
        if(xhr.status == 200) {
          cb(null, JSON.parse(xhr.responseText)
          .map(object => new Negotiations(new Date(object.data), object.quantidade, object.valor)))
        
        } else {
          console.log(xhr.responseText)
          cb('Não foi possível obter as negociações', null)
        }
      }
    }
    xhr.send()
  }
  
  getLastWeekNegotiation(cb) {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', 'negociacoes/anterior')
    xhr.onreadystatechange = () => {
      
      if(xhr.readyState == 4) {
        if(xhr.status == 200) {
          cb(null, JSON.parse(xhr.responseText)
          .map(object => new Negotiations(new Date(object.data), object.quantidade, object.valor)))
        
        } else {
          console.log(xhr.responseText)
          cb('Não foi possível obter as negociações', null)
        }
      }
    }
    xhr.send()
  }
  
  getRetreatWeekNegotiation(cb) {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', 'negociacoes/retrasada')
    xhr.onreadystatechange = () => {
      
      if(xhr.readyState == 4) {
        if(xhr.status == 200) {
          cb(null, JSON.parse(xhr.responseText)
          .map(object => new Negotiations(new Date(object.data), object.quantidade, object.valor)))
        
        } else {
          console.log(xhr.responseText)
          cb('Não foi possível obter as negociações', null)
        }
      }
    }
    xhr.send()
  }
  
 /* postNegotiation() {
    let xhr = new XMLHttpRequest()
    xhr.open('POST', 'negociacoes')
    xhr.onload = () => {
     var status = request.status; // HTTP response status, e.g., 200 for "200 OK"
     var data = request.responseText; // Returned data, e.g., an HTML document.
    }
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    request.send(postData)
  } */
}