const db = require('../../helper/agent/pg');
const config = require('../../config');
const crypt = require('../../helper/util/crypt');

exports.findById = (data) => {
    return db.oneOrNone(
        `
            SELECT
                U.id,
                U.email,
                P.name,
                P.last_name,
                P.middle_name
            FROM public.user U
                INNER JOIN public.person P ON U.person_id = P.id
            WHERE U.id = $<id>
        `,
        data);
};

exports.findByEmail = (data) => {
    data.password = crypt.hash(data.password + config.secrets.salt);
    return db.oneOrNone(
        `
            SELECT
                U.id,
                U.email,
                $<password> = U.password AS password,
                P.name,
                P.last_name,
                P.middle_name
            FROM public.user U
                INNER JOIN public.person P ON U.person_id = P.id
            WHERE U.email = $<email>
        `,
        data);
};

exports.add = (data) => {
    return db.tx(t => {
        return t.one(`
            INSERT INTO public.person(name, last_name, middle_name)
            VALUES($1, $2, $3) RETURNING id
            `, [data.name, data.last_name, data.middle_name])
            .then(person=> {
                return t.one(`
                    INSERT INTO public.user(email, password, person_id)
                    VALUES($1, $2, $3) RETURNING id
                    `, [data.email, crypt.hash(data.password + config.secrets.salt), person.id]);
            });
    })
    .then(res => {
        return Promise.resolve(res.id);
    })
    .catch(err => {
        return Promise.reject(err);
    })
};