const API_URL = "https://script.google.com/macros/s/AKfycbyYf5pmLjyxdt_EMgwTF2wdWtQbqtY5peix6RPK-WMsKP2pAtkKnxs66zCq-MvoRvXkEw/exec"

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
