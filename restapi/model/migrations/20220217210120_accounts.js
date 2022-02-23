/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('accounts', (table) => {
        table.increments('id').primary();
        table.integer('user_id');
        table.foreign('user_id').references('users.id').onDelete('CASCADE');
        table.string('name');
        table.integer('balance');
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable('accounts');
}
