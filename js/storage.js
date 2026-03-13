function salvarSocio(e){

e.preventDefault()

let dados = JSON.parse(localStorage.getItem("dados")) || {}

let form = new FormData(e.target)

for (let [k,v] of form){

dados[k] = v

}

localStorage.setItem("dados",JSON.stringify(dados))

location.href="resiliencia.html"

}

function salvarInstrumento(e,proxima){

e.preventDefault()

let dados = JSON.parse(localStorage.getItem("dados")) || {}

let form = new FormData(e.target)

for (let [k,v] of form){

dados[k] = v

}

localStorage.setItem("dados",JSON.stringify(dados))

location.href = proxima

}