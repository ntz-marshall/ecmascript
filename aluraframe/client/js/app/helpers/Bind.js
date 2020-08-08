class Bind {
  
  constructor(model, view, ...props) {
    let proxy = ProxyFactory.create(model, props, model =>
                                   view.update(model))
    view.update(model)
    
    return proxy
  }
}


/* let abc = String.fromCharCode(65, 66, 67);  // "ABC"
let d = Array.from("abc");
["a", "b", "c"] */