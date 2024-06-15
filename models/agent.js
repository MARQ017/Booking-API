import { Model, DataTypes } from 'sequelize';
import bcrypt from 'bcryptjs';

export default (sequelize) => {
  class Agent extends Model {
    static associate(models) {
      Agent.hasMany(models.Booking, { foreignKey: 'agent_id' });
      Agent.hasMany(models.User, { foreignKey: 'agent_id' });
    }
  }

  Agent.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Agent',
    hooks: {
      beforeCreate: async (agent) => {
        agent.password = await bcrypt.hash(agent.password, 10);
      },
    },
  });

  return Agent;
};
