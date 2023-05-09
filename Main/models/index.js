const Event = require('./event');
const Rsvp = require('./rsvp');
const User = require('./user');

User.hasMany(Event, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

User.hasMany(Rsvp, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  Event.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
  Rsvp.belongsTo(User, {
    foreignKey: 'user_id'
  });
  

module.exports = { Event, Rsvp, User };