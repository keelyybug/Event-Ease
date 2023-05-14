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
  
  router.put('/edit-event/:id', withAuth, async (req, res) => {
    try {
      const eventId = req.params.id;
      // Find the logged in user based on the session ID
      const eventData = await Event.update(req.body, {
        where: {id: eventId}
      });
      console.log(eventData);
      // const event = eventData.get({ plain: true });
      res.status(200).json(eventData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
module.exports = router;

