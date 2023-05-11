const sequelize = require('../config/config');
const { Event, Rsvp, User } = require('../models');

const eventData = require('./eventData.json');
const rsvpData = require('./rsvpData.json');
const userData = require('./userData.json');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  const seedUsers = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true
  });
  seedUsers;

 
  const seedEvents = await Event.bulkCreate(eventData);
  seedEvents;

  const seedRsvp = await Rsvp.bulkCreate(rsvpData);
  seedRsvp;
};



seedAll();