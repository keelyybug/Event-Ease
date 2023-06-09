const router = require('express').Router();
const userRoutes = require('./userRoutes');
const profileRoutes = require('./profileRoutes');
const rsvpRoutes = require('./rsvpRoutes');

router.use('/user', userRoutes);
router.use('/profile', profileRoutes);
router.use('/rsvp', rsvpRoutes);

module.exports = router;