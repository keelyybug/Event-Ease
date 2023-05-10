const router = require('express').Router();
const sequelize = require('../../config/config');
const { Event, Rsvp, User } = require('../../models');
const withAuth = require('../../utils/auth');

module.exports = router;