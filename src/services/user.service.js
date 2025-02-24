const BaseService = require('./base.service');
const User = require('../models/user.model');

class UserService extends BaseService {
  constructor() {
    super(User);
  }

  async getAllUsers() {
    return this.getAll({
      attributes: { exclude: ['password'] },
    });
  }

  async updateUser(id, userData) {
    const { _password, ...updateData } = userData;
    try {
      const result = await this.update(id, updateData);
      if (result.success && result.data) {
        const { _password, ...userData } = result.data.toJSON();
        return { success: true, data: userData };
      }
      return result;
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  async getUserById(id) {
    return this.getById(id, {
      attributes: { exclude: ['password'] },
    });
  }
}

module.exports = new UserService();
