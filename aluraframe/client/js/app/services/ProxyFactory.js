class ProxyFactory {
  
  static create(object, props, action) {
    
    return new Proxy(object, {
      get(target, prop, receiver) {
        if(props.includes(prop) && ProxyFactory._ehFunc(target[prop])) {
      return function() {
        console.log(`interceptando ${prop}`)
        let rodolfo = Reflect.apply(target[prop], target, arguments)
        action(target)
        return rodolfo}}
        
      return Reflect.get(target, prop, receiver)
      },
      set(target, prop, value, receiver) {
        let rodolfo = Reflect.set(target, prop, value, receiver)
        if(props.includes(prop)) action(target)
        return rodolfo
      }
    });
  }
  static _ehFunc(func){return typeof(func) == typeof(Function)}
  
}