const router = require('express').Router();
// Import relevant models
const { Event, User } = require ('../models')
// Can only 'GET' user dashboard/events with authorization
const withAuth = require('../utils/auth');

// Homepage
// router.get('/', (req, res) => {
//   res.render('homepage', { title: 'Homepage' });
// });

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