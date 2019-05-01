const { Model } = require('objection');

class UserType extends Model {
  static get tableName() {
    return 'user_types';
  }
}
module.exports = UserType;
