const userRepo = ({ knex }) => {
  const getUsers = () => knex;
  const getUserDetail = id => knex.where({ id }).select('*');
  const createUser = data => knex
    .insert({ ...data, ...{ createdAt: new Date(), updatedAt: new Date() } })
    .returning('*');
  return {
    getUsers,
    getUserDetail,
    createUser,
  };
};
module.exports = {
  userRepo,
};
