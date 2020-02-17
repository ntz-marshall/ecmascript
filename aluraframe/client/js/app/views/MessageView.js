/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-undef
class MessageView extends View {

    constructor(element) {
        super(element)
    }

    template(model) {

        return model.text ? `<p class="alert alert-info">${model.text}</p>` : '<p></p>'
    }
}