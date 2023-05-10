const sequelize = require('../config/config');
const { Event, Rsvp, User } = require('../models');

const eventData = require('./eventData.json');
const rsvpData = require('./rsvpData.json');
const userData = require('./userData.json');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  const seedUsers = () => User.bulkCreate(userData);
  seedUsers();

  const seedEvents = () => User.bulkCreate(eventData)
  seedEvents();

  const seedRsvp = () => User.bulkCreate(rsvpData)
  seedUsers();

};

seedAll();