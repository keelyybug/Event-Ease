const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
//const routes = require('./controllers');

const sequelize = require('./config/connection');
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

// Homepage
app.get('/', (req, res) => {
  res.render('homepage', { title: 'Homepage' });
});

//Dashboard Page
app.get('/dashboard', (req, res) => {
  res.render('dashboard', { title: 'Dashboard' });
});

// Edit Event Page
app.get('/edit-event', (req, res) => {
  res.render('edit-event', { title: 'Edit Event' });
});

// Featured Page
app.get('/featured', (req, res) => {
  res.render('featured', { title: 'Featured' });
});

// Login Page
app.get('/login', (req, res) => {
  res.render('login', { title: 'Login' });
});

// New Event Page
app.get('/new-event', (req, res) => {
  res.render('new-event', { title: 'New Event' });
});

// Signup Page
app.get('/signup', (req, res) => {
  res.render('signup', { title: 'Signup' });
});

// Single Event Page
app.get('/single-event', (req, res) => {
  res.render('single-event', { title: 'Single Event' });
});

//! Creates fake JSON database with faker
// const { faker } = require('@faker-js/faker');
// const fs = require('fs');

// function generateUsers() {

//   let users = []

//   for (let id=1; id <= 100; id++) {

//     let firstName = faker.name.firstName();
//     let lastName = faker.name.lastName();
//     let email = faker.internet.email();

//     users.push({
//         "id": id,
//         "first_name": firstName,
//         "last_name": lastName,
//         "email": email
//     });
//   }

//   return { "data": users }
// }

// let dataObj = generateUsers();

// fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));

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

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Listening to http://localhost:${PORT}`)
  );
});