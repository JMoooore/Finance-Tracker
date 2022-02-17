/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("payees", (table) => {
        table.increments("id").primary();
        table.integer("user_id");
        table.foreign("user_id").references("users.id").onDelete("CASCADE");
        table.string("name");
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("payees");
};
