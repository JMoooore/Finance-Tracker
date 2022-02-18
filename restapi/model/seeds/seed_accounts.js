/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function seed(knex) {
    return knex('accounts')
        .del()
        .then(function () {
            return knex('accounts').insert([
                { user_id: 1, name: 'wallet', balance: 1000 },
                { user_id: 2, name: 'wallet', balance: 2000 },
                { user_id: 3, name: 'wallet', balance: 3000 },
                { user_id: 4, name: 'wallet', balance: 500 },
                { user_id: 5, name: 'wallet', balance: 100 },
                { user_id: 6, name: 'wallet', balance: 100000 },
            ]);
        });
}
