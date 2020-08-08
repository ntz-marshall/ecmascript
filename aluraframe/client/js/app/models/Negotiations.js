/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
class Negotiations {
  constructor(data, quantidade, valor) {
    this._data = new Date(data.getTime())
    this._quantidade = quantidade
    this._valor = valor
    Object.freeze(this)
  }

  // _ são convenções que significa que os dados só podem ser alterados pelos próprios méthodos da classe
  // funções criadas dentro de classes são métodos
  get volume() {
    return this._quantidade * this._valor
  }
  get data() {
    return new Date(this._data.getTime())
    // programação defensiva
    // .getTime() retorna um grande número que representa a data, e o Date() aceita esse valor
  }
  get quantidade() {
    return this._quantidade
  }
  get valor() {
    return this._valor
  }
}