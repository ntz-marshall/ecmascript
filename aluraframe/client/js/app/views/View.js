// eslint-disable-next-line no-unused-vars
class View {
    constructor(element) {
        this._element = element
    }
    template(){
        throw new Error('O método template deve ser criado.')
    }
    update(model) {
        this._element.innerHTML  = this.template(model)
    }
}