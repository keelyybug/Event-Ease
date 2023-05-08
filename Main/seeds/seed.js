const sequelize = require('../config/connection');
//const { faker } = require('@faker-js/faker');

//const randomName = faker.name.fullName(); // Rowan Nikolaus
//const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

const seedAll = async () => {
  await sequelize.sync({ force: true });

  process.exit(0);
};

seedAll();