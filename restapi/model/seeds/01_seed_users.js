import bcryptjs from 'bcryptjs';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const password = bcryptjs.hashSync('1234', 10);

export function seed(knex) {
    return knex('users')
        .del()
        .then(function () {
            return knex('users').insert([
                {
                    first_name: 'Isaias',
                    last_name: 'Nuno',
                    email: 'in@email.com',
                    password: password,
                },
                {
                    first_name: 'Kevin',
                    last_name: 'Heleodoro',
                    email: 'kh@email.com',
                    password: password,
                },
                {
                    first_name: 'Nick',
                    last_name: 'Raffaele',
                    email: 'nr@email.com',
                    password: password,
                },
                {
                    first_name: 'Fernando',
                    last_name: 'Curiel',
                    email: 'fc@email.com',
                    password: password,
                },
                {
                    first_name: 'Paul',
                    last_name: 'Devlin',
                    email: 'pd@email.com',
                    password: password,
                },
                {
                    first_name: 'John',
                    last_name: 'Moore',
                    email: 'jm@email.com',
                    password: password,
                },
            ]);
        });
}
