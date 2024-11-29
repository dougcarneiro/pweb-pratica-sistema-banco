class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta = null, dependentes = []) {
        super(nome, cpf, conta);
        this._dependentes = dependentes;
    }
    get dependentes() {
        return this._dependentes;
    }
    set dependentes(dependentes) {
        this._dependentes = dependentes;
    }
}
