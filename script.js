
const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false'

async function fetchApi() {
    resposta = await fetch(url)
    let data = await resposta.json()
    console.log(data)

    function cripto() {
        let content = document.querySelector('#conteudo')
        data.forEach((coin, i) => {
            let img = data[i].image
            content.innerHTML += `
        <div class="conteudo">
           <h1>${data[i].name}</h1>
           <h1>${data[i].current_price}</h1>
           <h1 id="price">${data[i].price_change_percentage_24h.toFixed(2)}% </h1>
           <img src="${img}" alt="cripto" />
        </div>
        `
            let variacao = document.querySelector('#price')
            let variacao24h = data[i].price_change_percentage_24h;
            if (variacao24h < 0) {
                variacao.setAttribute('id', 'red')
            }
            else {
                variacao.setAttribute('id', 'green')
            }

            console.log(content)
        })
    }

    cripto();

}

fetchApi();