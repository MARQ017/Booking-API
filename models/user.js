import { Model, DataTypes } from 'sequelize';
import bcrypt from 'bcryptjs';

export default (sequelize) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Booking, { foreignKey: 'user_id' });
    }
  }

  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    agent_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Agent', // Ensure 'Agent' matches the name of your Agent model
        key: 'id' // Assuming 'id' is the primary key of the Agent model
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: async (user) => {
        user.password = await bcrypt.hash(user.password, 10);
      },
    },
  });

  return User;
};
