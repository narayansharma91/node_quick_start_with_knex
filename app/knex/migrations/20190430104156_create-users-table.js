
exports.up = function(knex, Promise) {
     return knex.schema
    .createTable('users', function (table) {
       table.increments('id');
       table.string('firstName', 255).notNullable();
       table.string('lastName', 255).notNullable();
       table.string('email', 255).notNullable();
       table.integer('userTypeId').notNullable();
       table.date('createdAt', 255).notNullable();
       table.date('updatedAt', 255).notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema
      .dropTable("users")
};
