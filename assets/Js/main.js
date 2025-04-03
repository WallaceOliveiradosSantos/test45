// minha chave da API
const key = "e0283766cee7e7e70be7e75409ae8042"

//Função para pegar o valor do input-cidade

function coletarValor() {
    //Buscando o valor do input no HTML e atribuindo a variável cidade
    let cidade = document.querySelector(".input-cidade").value
    // Imprimindo a variável cidade
    console.log(cidade)
    dadosAPI(cidade)

}

//Função para pegar dados API
function dadosAPI(cidade) {
    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}`)
}