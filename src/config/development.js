module.exports = {
    logging: true,
    pg: {
        user: "homestead",
        password: "secret",
        database: "equity",
        host: "localhost",
        port: 5432,
        maxConnection: 10,
        idleTimeoutMillis: 10000,
    },
    api: {},
    auth: {},
    secrets: {
        jwt: 'salom',
        salt: 'salom',
        crypt: {
            alg: 'aes-128-ctr',
            key: 'Fg3141das1Hq2',
            iv: 'InzqI381nkaf',
        }
    },
};