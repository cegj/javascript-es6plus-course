export default function initNumberAnimation(){
    const numbers = document.querySelectorAll('[data-number]');

    numbers.forEach((number) => {
        const total = +number.innerText;

        let partialNumber = 0;

        const increment = Math.floor(total / 50);

        const timer = setInterval(() => {
            partialNumber += increment;
            number.innerText = partialNumber;
            if (partialNumber > total){
                number.innerText = total;
                clearInterval(timer)
            }
        }, 40 * Math.random())
    })
}

const btnAnimateNumbers = document.getElementById('animate-numbers-btn');

btnAnimateNumbers.addEventListener('click', initNumberAnimation)