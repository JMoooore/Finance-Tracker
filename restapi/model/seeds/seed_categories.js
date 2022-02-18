/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function seed(knex) {
    return knex('categories')
        .del()
        .then(function () {
            return knex('categories').insert([
                { user_id: 1, name: 'Food' },
                { user_id: 1, name: 'Clothes' },
                { user_id: 2, name: 'Food' },
                { user_id: 2, name: 'Supplements' },
                { user_id: 3, name: 'School' },
                { user_id: 4, name: 'Bills' },
                { user_id: 4, name: 'Rent' },
                { user_id: 5, name: 'Insurance' },
                { user_id: 5, name: 'Car' },
                { user_id: 6, name: 'Mortgage' },
                { user_id: 6, name: 'Officer stuff' },
                { user_id: 3, name: 'Gas' },
                { user_id: 4, name: 'Donations' },
            ]);
        });
}
