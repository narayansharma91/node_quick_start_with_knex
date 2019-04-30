const userTypes = require("./../../factories/user_types");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("user_types")
    .del()
    .then(() =>
      // Inserts seed entries
      knex("user_types").insert(userTypes)
    );
};
