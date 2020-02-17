// eslint-disable-next-line no-unused-vars
class MapingController {

    constructor() {
        let $ = document.querySelector.bind(document)
        this.table = $('tbody')
        this.employees = [
            {
                "nome": "Douglas",
                "endereco" : "Rua da esquina, 123",
                "salario" : "4500"
            },
            {
                "nome": "Felipe",
                "endereco" : "Rua da virada, 456",
                "salario" : "5000"
            },
            {
                "nome": "Silvio",
                "endereco" : "Rua da aresta, 789",
                "salario" : "6000"
            }
            ];
    }
    employeesHTML() {
        this.employeesHtml = this.employees.map(f => `
                <tr>
                    <td>${f.nome}</td>
                    <td>${f.endereco}</td>
                    <td>${f.salario}</td>
                </tr>
            `)
        this.htmlConcat = this.employeesHtml.join('')
        this.table.innerHTML = this.htmlConcat
    }
    
}