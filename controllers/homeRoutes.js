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
    });
    const eventData = await Event.findAll({
      where: {user_id: req.session.user_id},
      include: [{ model: User, attributes: ['id'] }]
    });
    const events = eventData.map((event) => event.get({ plain: true }));
    const user = userData.get({ plain: true });
    console.log(events);
    const data = {user: user, events: events}
    res.render('profile', {
      ...data,
      logged_in: true, title: 'Profile'
    });
  } catch (err) {
    res.status(500).json(err);
  }

});


//* Get event by ID
router.get('/event/:id', async (req, res) => {
  try {
    const eventData = await Event.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const event = eventData.get({ plain: true });

    res.render('single-event', {
      ...event,
      logged_in: req.session.logged_in
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


// New Event Page
router.get('/new-event', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      // include: [{ model: Event }],
    });

    const user = userData.get({ plain: true });
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;})

    res.render('new-event', {
      ...user,
      logged_in: req.session.logged_in, title: 'New Event'
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// Single Event Page
router.get('/single-event/:id', withAuth, async (req, res) => {
  try {
    const eventId = req.params.id;
    // Find the logged in user based on the session ID
    const eventData = await Event.findByPk(eventId, {
      attributes: ['id', 'event_title', 'event_description', 'event_date'],
      include: [{model: User}]
    });

    const event = eventData.get({ plain: true });
    console.log(event);
    res.render('single-event', {
      event,
      logged_in: req.session.logged_in, title: 'Single-Event' })
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', withAuth, async (req, res) => {
  try {

    const eventData = await Event.findAll(req.body, {
      include: [{model: User}]
    });
   
    const events = eventData.map((event) => event.get({ plain: true }));

    console.log(events);
    res.render('dashboard', {events, logged_in: true});
  } catch (err) {
    res.redirect('/profile');
  }
});


// Edit Event Page
router.get('/edit-event/:id', withAuth, async (req, res) => {
  try {
    const eventId = req.params.id;
    // Find the logged in user based on the session ID
    const eventData = await Event.findByPk(eventId, {
      attributes: ['id', 'event_title', 'event_description', 'event_date'],
      include: [{model: User, model: Rsvp}]
    });

    const event = eventData.get({ plain: true });
    console.log(event);
    res.render('edit-event', {
      ...event,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/update/:id', (req, res) => {
  const itemId = req.params.id;
  const updatedItem = req.body;

  res.redirect('/items');
});

router.delete('/edit-event/:id', withAuth, async (req, res) => {
  try {
    const eventId = req.params.id;

    // Delete the event
    const deletedEvent = await Event.destroy({
      where: {
        id: eventId,
      },
    });
    
    // Event successfully deleted
    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/event/:id/rsvp', async (req, res) => {
  try {
   let event;
   const rsvpData = await Event.findByPk(req.params.id, {
    include: [{model: Rsvp, include: [User]}]
   })
   event = rsvpData.get({plain: true});
    // const rsvpData = await Rsvp.findAll({
    //   where: {event_id: req.params.id}
    // });
    // if (rsvpData) {
    //   rsvps = rsvpData.map((rsvp) => rsvp.get({ plain: true })); 
    // } else {
    //   rsvps = []
    // }
    console.log(event);

    res.render('rsvp', { 
      event, 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


//Dashboard
router.get('/dashboard', (req, res) => {
  res.render('dashboard', { title: 'Dashboard' });
});


// Signup Page
router.get('/signup', (req, res) => {
  res.render('signup', { title: 'Signup' });
});


module.exports = router;
