'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Agent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Agent.hasMany(models.Booking, { foreignKey: 'agent_id' });
      Agent.hasMany(models.User, { foreignKey: 'agent_id' });
    }
  }
  Agent.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Agent',
  });
  return Agent;
};