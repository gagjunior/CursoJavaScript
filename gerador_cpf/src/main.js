import GeraCPF from './modules/GeraCPF'
import './assets/css/style.css'

(function () {

    document.addEventListener('click', e => {
        const elemento = e.target
        if (elemento.classList.contains('btn-gerar')) {
            const gera = new GeraCPF()
            const cpfGerado = document.querySelector('.cpf-gerado');
            cpfGerado.innerHTML = gera.geraNovoCpf();
        }
    })


})();