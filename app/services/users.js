const { UserNotFound } = require('../util/exceptions/errors');

const userService = ({
  repos: {
    userRepo: { getUsers, getUserDetail, createUser },
  },
}) => {
  const getUserService = () => getUsers();
  const getUserDetailService = async (id) => {
    const userInfo = await getUserDetail(id);
    const userExist = !!userInfo;
    if (!userExist) {
      throw new UserNotFound('User not found');
    }
    return userInfo;
  };
  const createUserService = data => createUser(data);
  return {
    getUserService,
    getUserDetailService,
    createUserService,
  };
};
module.exports = { userService };
