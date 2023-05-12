const router = require('express').Router();
const { Event, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {

    const eventData = await Event.findAll({
      where:{ user_id: req.session.user_id},
      include: [{model: User}]
    });

    const events = eventData.map((event) => event.get({ plain: true }));
    console.log(events);
    res.render('all-events');
  } catch (err) {
    res.redirect('/profile');
  }
});

module.exports = router;