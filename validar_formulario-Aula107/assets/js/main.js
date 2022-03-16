class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.verificarCampos();
        const senhasValidas = this.senhasValidas();
    }

    verificarCampos() {
        let valid = true;

        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;

            if (!campo.value) {
                this.criaErro(campo, `Campo ${label} não pode estar vazio`);
                valid = false
            }

            if (campo.classList.contains('cpf')) {
                if (!this.validaCpf(campo)) valid = false
            }

            if (campo.classList.contains('usuario')) {
                if (!this.validaUsuario(campo)) valid = false
            }
        }

        return valid;
    }

    criaErro(campo, mensagem) {
        const div = document.createElement('div');
        div.innerHTML = mensagem;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }

    validaCpf(campo) {
        const cpf = new ValidaCPF(campo.value)

        if (!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido')
        }

        return true;
    }

    validaUsuario(campo) {
        let valid = true;
        const usuario = campo.value;

        if (usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'Usuario deve estar entre 3 e 12 letras')
            valid = false;
        }

        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, 'Usuario deve ter apenas letras e/ou numeros')
            valid = false;
        }

        return valid;
    }

    senhasValidas() {
        let valid = true;
        const senha = this.formulario.querySelector('.senha');
        const senhaRepetida = this.formulario.querySelector('.repetir-senha');

        if (senha.value !== senhaRepetida.value) {
            this.criaErro(senha, 'Campos senha e repetir senha devem ser iguais')
            this.criaErro(senhaRepetida, 'Campos senha e repetir senha devem ser iguais')
            valid = false;
        }

        if (senha.value.length < 6 || senha.value.length > 12) {
            this.criaErro(senha, 'Senha deve estar entre 6 e 12 letras')
            valid = false;
        }

        return valid;

    }
}

const valida = new ValidaFormulario();