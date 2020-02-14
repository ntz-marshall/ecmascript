class NegotiationsLists {
    
    constructor() {
        this._negotiations = []
    }

    addict(negotiation) {
        this._negotiations.push(negotiation)
    }

    get negotiations() {
        return [].concat(this._negotiations) // método defensivo, retorna uma cópia do array sem alterar o original
    }
}