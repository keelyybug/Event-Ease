const router = require('express').Router();
const userRoutes = require('./userRoutes');
const eventRoutes = require('./eventRoutes');
const rsvpRoutes = require('./rsvpRoutes');

router.use('/user', userRoutes);
router.use('/event', eventRoutes);
router.use('/rsvp', rsvpRoutes);

module.exports = router;