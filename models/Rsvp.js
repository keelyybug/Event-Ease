const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Rsvp extends Model {}

Rsvp.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    rsvp_message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_created: {
      type: DataTypes.DATE,//?talk it out
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    }, 
    event_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'event',
        key: 'id',
      },
    }, 
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'rsvp',
  }
);

module.exports = Rsvp;
