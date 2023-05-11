const router = require('express').Router();
const { Event, Rsvp, User } = require('../models');
const withAuth = require('../utils/auth');

// Homepage
router.get('/', (req, res) => {
    res.render('homepage', { title: 'Homepage' });
  });


// Login withAuth middleware && Profile
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true, title: 'Profile'
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login', { title: 'Login' });
});


// Signup Page
router.get('/signup', (req, res) => {
  res.render('signup', { title: 'Signup' });
});


// New Event Page
router.get('/new-event', (req, res) => {
  res.render('new-event', { title: 'New Event' });
});
  
  router.post('/create', (req, res) => {
      const newItem = req.body;
  
      res.redirect('/items');
    });
  
  
  // Single Event Page
  router.get('/single-event', (req, res) => {
    res.render('single-event', { title: 'Single Event' });
  });
  
  
  // Edit Event Page
  router.get('/edit-event', (req, res) => {
    res.render('edit-event', { title: 'Edit Event' });
  });
  
  router.get('/edit/:id', (req, res) => {
    const itemId = req.params.id;
  
    res.render('edit', { item });
  });
  
  router.post('/update/:id', (req, res) => {
    const itemId = req.params.id;
    const updatedItem = req.body;
  
    res.redirect('/items');
  });
  
  
  // Delete event
  router.delete('/items/:id', (req, res) => {
    const itemId = req.params.id;
  
    res.sendStatus(200);
  });
  
  
// Comments page
router.get('/comments', (req, res) => {
  res.render('comments', { title: 'Comments' });
});

router.post('/comments', (req, res) => {
  const { name } = req.body;

  res.sendStatus(200);
});
  
  
// Rsvp Page
router.get('/rsvp', (req, res) => {
  res.render('rsvp', { title: 'Rsvp' });
});

router.post('/rsvp', (req, res) => {
  const { name, email } = req.body;

  res.sendStatus(200);
});


//Dashboard
router.get('/dashboard', (req, res) => {
  res.render('dashboard', { title: 'Dashboard' });
});

module.exports = router;
