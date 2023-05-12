const router = require('express').Router();
const { User, Event, Rsvp } = require('../../models');
const withAuth = require('../../utils/auth');

//* Create event
router.post('/event', withAuth, async (req, res) => {
    try{
        const createEvent = await Event.create({
            ...req.body,
            user_id: req.session.user_id,
            
        });

        req.session.save(() => {
          req.session.user_id = createEvent.id;
          req.session.loggedIn = true;

        res.status(200).json(createEvent);
      })
    } catch (err) {
      console.log(err);
        res.status(500).json(err);
    }
  });
  

module.exports = router;

