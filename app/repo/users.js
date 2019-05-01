const userRepo = ({ models: { User } }) => {
  const getUsers = () => User.query()
    .select('id', 'email', 'firstName', 'lastName')
    .eager('userTypes')
    .modifyEager('userTypes', builder => builder.select('name'));
  const getUserDetail = id => User.query()
    .findById(id)
    .eager('userTypes')
    .modifyEager('userTypes', builder => builder.select('name'));
  const createUser = data => User.query()
    .insert(data)
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
