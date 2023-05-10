const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const routes = require('./controllers');

const sequelize = require('./config/config');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// const sess = {
//   secret: '',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

// app.use(session(sess));

const hbs = exphbs.create({defaultLayout: 'main'});

// Configure Express Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


//!Creates fake information with faker
// const { faker } = require('@faker-js/faker');

// let firstName = faker.name.firstName();
// let lastName = faker.name.lastName();

// let jobTitle = faker.name.jobTitle();
// let prefix = faker.name.prefix(); 
// let suffix = faker.name.suffix();
// let jobArea = faker.name.jobArea();

// let phone = faker.phone.number();

// console.log(`Employee: ${prefix} ${firstName} ${lastName} ${suffix}`);
// console.log(`Job title: ${jobTitle}`);
// console.log(`Job area: ${jobArea}`);
// console.log(`Phone: ${phone}`);

// let futureDate = faker.date.future();
// let recentDate = faker.date.recent();
// let weekday = faker.date.weekday();

// console.log(futureDate);
// console.log(recentDate);
// console.log(weekday);

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Listening to http://localhost:${PORT}`)
  );
});