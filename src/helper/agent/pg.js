const config = require('../../config');

const pgp = require('pg-promise')();

module.exports = pgp({
    user: config.pg.user, //env var: PGUSER
    password: config.pg.password, //env var: PGPASSWORD
    database: config.pg.database, //env var: PGDATABASE
    host: config.pg.host, // Server hosting the postgres database
    port: config.pg.port, //env var: PGPORT
    max: config.pg.maxConnection, // max number of clients in the pool
    idleTimeoutMillis: config.pg.idleTimeoutMillis, // how long a client is allowed to remain idle before being closed
});