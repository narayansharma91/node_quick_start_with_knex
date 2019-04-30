const { userRepo } = require('./users');

const registerAllRepos = ({ knex }) => ({
  userRepo: userRepo({ knex: knex('users') }),
});
module.exports = {
  registerAllRepos,
};
