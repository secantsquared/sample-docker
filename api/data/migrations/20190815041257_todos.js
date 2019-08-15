exports.up = function(knex) {
  return knex.schema.createTable('todos', tbl => {
    tbl.increments();
    tbl
      .string('name', 128)
      .notNullable()
      .defaultTo('');
    tbl
      .string('email', 128)
      .notNullable()
      .defaultTo('');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('todos');
};
