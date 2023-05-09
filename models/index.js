const Event = require('./event');
const Rsvp = require('./rsvp');
const User = require('./user');

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