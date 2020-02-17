// eslint-disable-next-line no-unused-vars
class MapingController {

    employeesHTML() {
        let employees = [
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
        let employeesHtml = employees.map(f => `
                <tr>
                    <td>${f.nome}</td>
                    <td>${f.endereco}</td>
                    <td>${f.salario}</td>
                </tr>
            `)
        let htmlConcat = employeesHtml.join('')
        let table = document.querySelector('tbody')
        table.innerHTML = htmlConcat
    }
    
}