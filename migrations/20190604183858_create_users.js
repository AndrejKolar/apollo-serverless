exports.up = function(knex, Promise) {
  return knex.schema.createTable("Users", function(table) {
    table.integer("user_id").primary();
    table.string("username").notNull();
  });
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTableIfExists("Users")]);
};
