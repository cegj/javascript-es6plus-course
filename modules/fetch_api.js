export default function initSearchCEP(){

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

            let cepResult = cepResultTemplate.innerHTML;

            Object.entries(cepObject).forEach((item) => {

                cepResult = cepResult.replace(`{{${item[0]}}}`, item[1])
            
            });

            cepResultDOM.innerHTML = cepResult;

        }
        )
    }

}

// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
