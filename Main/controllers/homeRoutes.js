const router = require('express').Router();
// Import relevant models
const { Event, User } = require ('../models')
// Can only 'GET' user dashboard/events with authorization
const withAuth = require('../utils/auth');

// Get all events and JOIN with user data
router.get('/', async (req, res) => {
    try {
      
      const eventData = await Event.findAll({
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
  
      // Serialize data so the template can read it
      const events = eventData.map((event) => event.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('dashboard', { 
        projects, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;