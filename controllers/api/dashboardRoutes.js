const router = require('express').Router();
const { Event, User } = require('../../models');
const withAuth = require('../../utils/auth');

//anything ends in res.render should be in home routes bc it is html and html goes in homeroutes

router.get('/', withAuth, async (req, res) => {
  try {

    const eventData = await Event.findAll({
      where:{"userId": req.session.user_id},
      include: [User]
    });

    const events = eventData.map((post) => post.get({ plain: true }));
    console.log(events);
    res.render('all-events', {
      layout: 'dashboard',
      posts,
    });
  } catch (err) {
    res.redirect('login');
  }
});

module.exports = router;