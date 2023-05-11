const router = require('express').Router();
const userRoutes = require('./userRoutes');
const profileRoutes = require('./profileRoutes');
const rsvpRoutes = require('./rsvpRoutes');
const dashboardRoutes = require('./dashboardRoutes');

router.use('/user', userRoutes);
router.use('/profile', profileRoutes);
router.use('/rsvp', rsvpRoutes);
router.use('/dashboard', dashboardRoutes)

module.exports = router;