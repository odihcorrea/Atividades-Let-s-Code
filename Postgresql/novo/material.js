export class material {

    constructor(nome, quantidade, preco) {
        this._nome = nome;
        this._quantidade = quantidade;
        this._preco = preco;
    }

    set nome(nome) {
        this._nome = nome;
    }

    get nome() {
        return this._nome;
    }
    set quantidade(quantidade) {
        this._quantidade = quantidade;
    }

    get quantidade() {
        return this.quantidade;
    }

    set preco(preco) {
        this._preco = preco;
    }

    get preco() {
        return this._preco;
    }
}

modulo.exports = {
    material: material
}