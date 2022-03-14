function ValidaCpf(cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo', {
        get: function (){
            return cpfEnviado.replace(/\D+/g, '')
        }
    })    
}

ValidaCpf.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;

    this.criaDigito(this.cpfLimpo);

    return true;    
}

ValidaCpf.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
}

const cpf = new ValidaCpf('705.484.450-52')
console.log(cpf.valida());
