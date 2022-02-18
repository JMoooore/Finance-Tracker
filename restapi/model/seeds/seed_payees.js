/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function seed(knex) {
    return knex('payees')
        .del()
        .then(function () {
            return knex('payees').insert([
                { user_id: 1, name: 'Walmart' },
                { user_id: 1, name: 'Costco' },
                { user_id: 2, name: 'Target' },
                { user_id: 2, name: 'USAA' },
                { user_id: 3, name: 'Galvanize' },
                { user_id: 3, name: '7 Eleven' },
                { user_id: 4, name: 'Crunch Fitness' },
                { user_id: 4, name: 'Academy' },
                { user_id: 5, name: 'Petsmart' },
                { user_id: 5, name: 'HEB' },
                { user_id: 6, name: 'Chic-Fil-A' },
                { user_id: 6, name: 'Texaco' },
                { user_id: 4, name: 'Fort Hood National Bank' },
                { user_id: 5, name: 'Commissary' },
                { user_id: 2, name: 'Taco Place' },
                { user_id: 1, name: 'Pizza Hut' },
            ]);
        });
}
