
exports.up = function(knex, Promise) {
     return knex.schema
    .createTable('users', function (table) {
       table.increments('id').primary();
       table.string('firstName', 255).notNullable();
       table.string('lastName', 255).notNullable();
       table.string('email', 255).notNullable();
       table.integer('userTypeId').notNullable();
       table.date('createdAt', 255).notNullable();
       table.date('updatedAt', 255).notNullable();
       table.foreign('userTypeId').references('id').inTable('user_types').onDelete('CASCADE');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema
      .dropTable("users")
};
