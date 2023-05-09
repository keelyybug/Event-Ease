const sequelize = require('../config/config')
const { Event, Rsvp, User } = require('../models');

const eventData = require('./eventData.json');
const rsvpData = require('./rsvpData.json');
const userData = require('./userData.json');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const event of eventData.data) {
    await Event.create({
      ...event,
      user_id: users[Math.floor(Math.random() * users.length)],
    });

  for (const rsvp of rsvpData.data) {
    await Rsvp.create({
      ...rsvp,
      user_id: users[Math.floor(Math.random() * users.length)],
    });
  }
}

  process.exit(0);
};

seedAll();