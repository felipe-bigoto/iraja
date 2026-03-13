const API_URL = "COLE_AQUI_A_URL_DO_SCRIPT"

async function finalizar(){

let dados = JSON.parse(localStorage.getItem("dados"))

dados.id = crypto.randomUUID()

await fetch(API_URL,{
method:"POST",
body:JSON.stringify(dados)
})

localStorage.clear()

location.href="obrigado.html"

}