'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Booking extends Model {
    static associate(models) {
      Booking.belongsTo(models.User, { foreignKey: 'user_id' });
      Booking.belongsTo(models.Agent, { foreignKey: 'agent_id' });
    }
  }
  Booking.init({
    user_id: DataTypes.INTEGER,
    agent_id: DataTypes.INTEGER,
    start_at: DataTypes.DATE,
    finish_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};