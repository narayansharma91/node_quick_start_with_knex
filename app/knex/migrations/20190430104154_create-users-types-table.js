
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('user_types', function (table) {
       table.increments('id');
       table.string('name', 255).notNullable();
       table.date('createdAt', 255).notNullable();
       table.date('updatedAt', 255).notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTable("user_types")
};
