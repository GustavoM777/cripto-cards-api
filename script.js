
const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=40&page=1&sparkline=false'

async function fetchApi() {
    resposta = await fetch(url)
    let data = await resposta.json()
    console.log(data)

    function cripto() {
        let content = document.querySelector('#container')
        data.forEach((coin, i) => {
            let img = data[i].image
            let key = data[i].id
            content.innerHTML += `
        <div class="card">
        <div class="frontside" id=${key}>
           <h1>${data[i].name}</h1>
           <h1>${data[i].current_price}</h1>
           <h1 id="price">${data[i].price_change_percentage_24h.toFixed(2)}% </h1>
           <img src="${img}" alt="cripto" />
        </div>
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

            document.addEventListener('mouseover', function (e) {
                const element = e.target;
                console.log('el', element)
                if (element.classList.contains('frontside')) {
                    VanillaTilt.init(element, {
                        max: 25,
                        speed: 400,
                        glare: true,
                        "max-glare": 1,
                    });
                }
            })

       })
    }

    cripto();

}

fetchApi();