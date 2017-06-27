module.exports = {
    dev: 'development',
    test: 'testing',
    prod: 'production',
    port: process.env.PORT || 3000,
    logging: false,
    pg: {
        user: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
        host: process.env.PGHOST,
        port: process.env.PGPORT,
        maxConnection: 100,
        idleTimeoutMillis: 10000,
    },
    api: {},
    auth: {},
    secrets: {
        jwt: process.env.JWT,
        salt: process.env.SALT,
        crypt: {
            alg: process.env.CRYPT_ALG,
            key: process.env.CRYPT_KEY,
            iv: process.env.CRYPT_IV,
        }
    },
};