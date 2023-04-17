//Método que oculta o card quando inicia a página
document.getElementById('card').style.setProperty('display', 'none', 'important') 

function Procurar(){
    document.getElementById('card').style.setProperty('display', 'block', 'important') //Método que mostra o card quando clica o botão procurar
    let pais = document.getElementById('pais').value                           // variável que recebe o dado do input
    let finalURL = `https://restcountries.com/v3.1/name/${pais}?fullText=true` // variável que recebe a URL referente ao nome digitado no input
    fetch(finalURL)              // Método que recebe as informações da API
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        let bandeira = document.getElementById('bandeira')
        let nome = document.getElementById('nome')
        let capital = document.getElementById('capital')
        let pop = document.getElementById('pop')
        let cont = document.getElementById('cont')

        
        nome.innerHTML = pais
        capital.innerHTML = data[0].capital[0]
        cont.innerHTML = data[0].continents[0]
        pop.innerHTML = data[0].population
        bandeira.src =  data[0].flags.svg
    })
}