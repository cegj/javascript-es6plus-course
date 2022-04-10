export function initSearchCEP(){

    const btnCep = document.forms['cep-form']['submit-cep'];

    const cepResultTemplate = document.querySelector('#cep-result-template')

    const cepResultDOM = document.querySelector('#cep-result')

    btnCep.addEventListener('click', searchCEP)

    function searchCEP(event){
        event.preventDefault();

        let cep = document.forms['cep-form']['cep'].value;

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((r) => r.json())
        .then((cepObject) => {

            let cepResult;

            if (cepObject.erro === true){
                cepResult = '<tr><td>Invalid CEP. Please, try again.</tr></td>'
            } else {

                cepResult = cepResultTemplate.innerHTML;

                Object.entries(cepObject).forEach((item) => {

                cepResult = cepResult.replace(`{{${item[0]}}}`, item[1])
            
            });
            }

            cepResultDOM.innerHTML = cepResult;
        }
        ).catch(() => {
            let cepResult;
            cepResult = '<tr><td>There was an error. Please, check the CEP and try again.<br>For further information, open Javascript console.</tr></td>'
            cepResultDOM.innerHTML = cepResult;
        })
    }

}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

export function initBitcoinSearch(){

const bitcoinValueDOM = document.querySelector('#bitcoin-value');

fetch('https://blockchain.info/ticker')
.then((r) => r.json())
.then(bitcoinObject => bitcoinValueDOM.innerHTML = +(bitcoinObject.BRL.buy).toFixed(2))


setInterval(() => {

    fetch('https://blockchain.info/ticker')
    .then((r) => r.json())
    .then(bitcoinObject => bitcoinValueDOM.innerHTML = +(bitcoinObject.BRL.buy).toFixed(2))
},
15000)

}

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
