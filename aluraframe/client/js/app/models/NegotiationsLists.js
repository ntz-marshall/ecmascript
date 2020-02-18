// eslint-disable-next-line no-unused-vars
class NegotiationsLists {
    
    constructor(trap) {
        this._negotiations = []
        this._trap = trap
    }

    add(negotiation) {
        this._negotiations.push(negotiation)
        this._trap(this)
    }

    get negotiations() {
        return [].concat(this._negotiations) // método defensivo, retorna uma cópia do array sem alterar o original
    }

    removeNegotiation() {
        this._negotiations = []
        this._trap(this)
    }
}