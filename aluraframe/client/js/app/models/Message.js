// eslint-disable-next-line no-unused-vars
class Message {
    
  constructor(text= '') {

    this._text = text
  }

  get text() {
    return this._text
  }

  set text (text) {
    this._text = text
  }
}