const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
//const routes = require('./controllers/');

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

// app.use(session(sess))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const hbs = exphbs.create({defaultLayout: 'main'});

// Configure Express Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


// Homepage
app.get('/', (req, res) => {
  res.render('homepage', { title: 'Homepage' });
});

// Login Page
app.get('/login', (req, res) => {
  res.render('login', { title: 'Login' });
});

// Signup Page
app.get('/signup', (req, res) => {
  res.render('signup', { title: 'Signup' });
});

// Profile
app.get('/profile', (req, res) => {
  res.render('profile', { title: 'profile' });
});

// New Event Page
app.get('/new-event', (req, res) => {
  res.render('new-event', { title: 'New Event' });
});

// Single Event Page
app.get('/single-event', (req, res) => {
  res.render('single-event', { title: 'Single Event' });
});

// Edit Event Page
app.get('/edit-event', (req, res) => {
  res.render('edit-event', { title: 'Edit Event' });
});

// Comments page
app.get('/comments', (req, res) => {
  res.render('comments', { title: 'Comments' });
});

// Signup Page
app.get('/rsvp', (req, res) => {
  res.render('rsvp', { title: 'Rsvp' });
});

//Dashboard
app.get('/dashboard', (req, res) => {
  res.render('dashboard', { title: 'Dashboard' });
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Listening to http://localhost:${PORT}`)
  );
});