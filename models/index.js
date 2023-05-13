const Event = require('./Event');
const Rsvp = require('./Rsvp');
const User = require('./User');

User.hasMany(Event, {
  foreignKey: 'user_id',
  //onDelete: 'CASCADE'
  });

Event.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Rsvp, {
  foreignKey: 'user_id',
  //onDelete: 'CASCADE'
});

Rsvp.belongsTo(User, {
  foreignKey: 'user_id'
});

Event.hasMany(Rsvp, {
  foreignKey: 'event_id',
  //onDelete: 'CASCADE'
});

Rsvp.belongsTo(Event, {
  foreignKey: 'event_id'
});

module.exports = { Event, Rsvp, User };