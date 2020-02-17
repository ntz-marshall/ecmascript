// eslint-disable-next-line no-unused-vars
class Validator {
    constructor(){
        let $ = document.querySelector.bind(document)
        this._code= $("#code")
    }

    codeValidator() {
        return code => /\D{3}-\D{2}-\d{2}/.test(code) ? alert('Código válido!') : alert('Código inválido')
    }
}


/* codigo do professor */

class Codigo {

    constructor(texto) {

        if(!this._valida(texto)) throw new Error(`O texto ${texto} não é um código válido`);
        this._texto = texto;        
    }

    _valida(texto) {

        return /\D{3}-\D{2}-\d{2}/.test(texto);
    }

    get texto() {

        return this._texto;
    }
}

let codigo1 = new Codigo('GWZ-JJ-12'); // válido
console.log(codigo1.texto);
let codigo2 = new Codigo('1X1-JJ-12'); // inválido
console.log(codigo2.texto);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
let numeros = [1,5,3,7,43,56,24]
let dobro = numeros.map(num => num * 2);
console.log(dobro)
let metade = numeros.map(num=> num/2);
console.log(metade)
let raiz = numeros.map(num => Math.sqrt(num));
console.log(raiz)

/////////////////////////////////////////////////////////////
class Conta {

    constructor(saldo) {
        this._saldo = saldo
    }

    get saldo() {
        return this._saldo
    }

    atualiza() {
        throw new Error("Você deve sobrescrever o método!")
    }
}

/////
class ContaCorrente extends Conta {

    atualiza(taxa) {
        return this._saldo += taxa
    }
}

/////
class ContaPoupanca extends Conta {

    atualiza(taxa) {
        return this._saldo += (taxa *2)
    }
}

////// e o teste
let conta1 = new ContaCorrente(200); 
let conta2 = new ContaPoupanca(300); 
conta1.atualiza(2);
conta2.atualiza(3);
console.log(conta1.saldo); //202
console.log(conta2.saldo); //306

// No typescript podemos usar abstract class que impede alguém de instanciá-las
//abstract class View {}