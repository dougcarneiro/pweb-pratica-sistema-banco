class ClienteEspecial extends Cliente {

    private _dependentes: Cliente[];

    constructor(nome: string, cpf: string, conta: Conta = null, dependentes: Cliente[] = []){
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