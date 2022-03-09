function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        iniciar() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', e =>{
                if (e.code === 'Enter') {
                    this.realizaConta();
                }
            });
        },

        realizaConta() {
            let conta = this.display.value;
            try {
                conta = eval(conta);
                if (!conta) {
                    alert('Conta inválida');
                    return;
                }
                this.display.value = conta;
            } catch (e) {
                alert('Conta inválida');
                return;
            }
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target;

                //Botões de numeros
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                //Botão clear
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                //Botão apagar um
                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            })
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
            this.display.focus();
        }
    }
}

const calculadora = criaCalculadora();
calculadora.iniciar();