let campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
]
console.log(campos)

let tbody = document.querySelector('table tbody')
document.querySelector('.form').addEventListener('submit', (event) => {
    event.preventDefault()

    let tr = document.createElement('tr')
    campos.forEach((campo) => {
        let td = document.createElement('td')
        td.textContent = campo
        tr.appendChild(td)
    })
    let tdVolume = document.createElement('td')
    tdVolume.textContent = campos[1].value * campos[2].value

    tr.appendChild(tdVolume)
    tbody.appendChild(tr)

    campos[0] = ' '
    campos[1] = ' '
    campos [2] = ' '

    campos[0].focus()
})

// function clearFocus() {
//     campos[0] = ' '
//     campos[1] = 1
//     campos [2] = 0

//     campos[0].focus()
// }