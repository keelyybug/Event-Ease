const router = require('express').Router();
const { Event, Rsvp, User } = require('../models');
const withAuth = require('../utils/auth');

// Homepage
router.get('/', (req, res) => {
    res.render('homepage', { title: 'Homepage' });
  });

// Profile Page
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      // include: [{ model: Event }],
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
router.get('/new-event', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      // include: [{ model: Event }],
    });

    const user = userData.get({ plain: true });

    res.render('new-event', {
      ...user,
      logged_in: true, title: 'New Event'
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
  
  // Single Event Page
router.get('/single-event', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('single-event', {
      ...user,
      logged_in: true, title: 'Single Event'
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
  
  
// Edit Event Page
router.get('/edit-event', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('edit-event', {
      ...user,
      logged_in: true, title: 'Edit Event'
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Edit individual event
router.get('/edit/:id', (req, res) => {
  const itemId = req.params.id;

  res.render('edit', { item });
});
  
router.post('/update/:id', (req, res) => {
  const itemId = req.params.id;
  const updatedItem = req.body;

  res.redirect('/items');
});

// Delete individual event
router.delete('/items/:id', (req, res) => {
  const itemId = req.params.id;

  res.sendStatus(200);
});
  
  
// Comments page
router.get('/comments', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

  const user = userData.get({ plain: true });

  res.render('comments', {
      ...user,
      logged_in: true, title: 'Comments'
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Post comments
router.post('/create-new-comment', (req, res) => {
  const newComment = req.body;

  res.redirect('/comments');
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
