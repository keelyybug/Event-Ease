const router = require('express').Router();
const { Event, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {

    const eventData = await Event.findAll({
      where:{"userId": req.session.user_id},
      include: [User]
    });

    const events = postData.map((post) => post.get({ plain: true }));
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