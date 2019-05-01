const { Model } = require('objection');
const UserType = require('./userTypes');

class User extends Model {
  $beforeInsert() {
    const timestamp = new Date().toISOString();
    this.createdAt = timestamp;
    this.updatedAt = timestamp;
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }

  static get tableName() {
    return 'users';
  }

  static get relationMappings() {
    return {
      userTypes: {
        relation: Model.BelongsToOneRelation,
        modelClass: UserType,
        join: {
          from: 'users.userTypeId',
          to: 'user_types.id',
        },
      },
    };
  }
}
module.exports = User;
