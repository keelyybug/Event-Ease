const router = require('express').Router();
const userRoutes = require('./userRoutes');
const profileRoutes = require('./eventRoutes');
const rsvpRoutes = require('./rsvpRoutes');
const dashboardRoutes = require('./dashboardRoutes');

router.use('/user', userRoutes);
router.use('/event', profileRoutes);
router.use('/rsvp', rsvpRoutes);
router.use('/event', )

module.exports = router;