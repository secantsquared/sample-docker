exports.up = function(knex) {
  return knex.schema.createTable('todos', tbl => {
    tbl.increments();
    tbl.string('name');
    tbl.string('email');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('todos');
};
