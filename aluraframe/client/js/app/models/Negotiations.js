class Negotiations {
    constructor(data, quantidade, valor) {
        this._data = data
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
        return this._data
    }
    get quantidade() {
        return this._quantidade
    }
    get valor() {
        return this._valor
    }
}