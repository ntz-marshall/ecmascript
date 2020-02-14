class DateHelper {

    // Retorna erro ao tentar instanciar a Classe
    constructor() {
        throw new Error('Esta classe não pode ser instanciada!')
    }

    // Ao dizer que o método é estático, vc não precisa instanciar a classe para acessá-los.
    static dateToString(date) {
        
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
        // retornando método usando Template String ${}
        // return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
    }

    static stringToDate(text) {
        // Exp Reg tudo que for digito, 4444 - 22 - 22, exp ára validar formato de data
        if(!/\d{4}-\d{2}-\d{2}/.test(text)) throw new Error('Deve estar no formato yyyy-mm-dd')
        // const date = new Date(this._inputDate.value.replace(/-/g, ',')) exp reg global que troca o - por ,
        // mesmo usando apenas a exp reg não havia erro de data.
        return new Date(...text.split('-').map((item, indice) => item - indice % 2 )) // arrow function já faz o return e se for apenas uma linha pode-se omitir o bloco
        // if (indice == 1) {return item -1}
        // indice 0 % 2 é 0 então não há subtração, indice 1 % 2 é 1 então há subtração, indice 2 % 2 é 0.
    }
}