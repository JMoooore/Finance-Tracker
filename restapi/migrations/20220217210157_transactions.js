/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("transactions", (table) => {
        table.increments("id").primary();
        table.integer("user_id");
        table.integer("payee_id");
        table.integer("account_id");
        table.integer("category_id");
        table.foreign("user_id").references("users.id").onDelete("CASCADE");
        table.foreign("payee_id").references("payees.id");
        table.foreign("account_id").references("accounts.id");
        table.foreign("category_id").references("categories.id");
        table.datetime("date",{useTz: false});
        table.specificType("inflow", "money");
        table.specificType("outflow", "money");
        table.string("note");
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("transactions")
};
