const { knexSnakeCaseMappers } = require("objection");

    @type {Object. <string, import("knex").knex.config> }

module.exports = {
    development: {
        client: 'postgresql',
        connection: {
            database: 'controle_material',
            user: 'postgres',
            password: 'root'
        },
        pool: {
            min: 2,
            max:10
        },
        migrations: {
            directory: './migration',
            tabelName: 'knex_migrations'
        },
        seeds: {
            directory: './seed'
        },
        ... knexSnakeCaseMappers
    },
};