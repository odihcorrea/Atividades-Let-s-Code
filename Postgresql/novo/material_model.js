const { model } = require('objection')

class material extends model {
    static get tableName() {
        return 'material';
    }

    static get idColumn() {
        return 'id';
    }

    static get nomeColum() {
        return 'nome';
    }

    static get quantidadeColumn() {
        return 'quantidade';
    }

    static get precoColumn() {
        return 'preco';
    }
}
