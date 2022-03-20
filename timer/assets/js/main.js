function timer() {
    const textTimer = document.querySelector('.timer');

    let segundos = 0;
    let timer;

    function getHour(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    function iniciarRelogio() {
        timer = setInterval(() => {
            segundos++;
            textTimer.innerHTML = getHour(segundos);
        }, 1000);
    }

    document.addEventListener('click', event => {
        const elemento = event.target;

        if (elemento.classList.contains('iniciar')) {
            clearInterval(timer)
            textTimer.classList.remove('pausado');
            iniciarRelogio();
        }
        else if (elemento.classList.contains('pausar')) {
            clearInterval(timer);
            textTimer.classList.add('pausado');
        }
        else if (elemento.classList.contains('zerar')) {
            clearInterval(timer);
            textTimer.innerHTML = '00:00:00';
            textTimer.classList.remove('pausado');
            segundos = 0;
        }


    });

    // iniciar.addEventListener('click', event => {

    // })

    // pausar.addEventListener('click', event => {

    // })

    // zerar.addEventListener('click', event => {

    // })

}

timer();