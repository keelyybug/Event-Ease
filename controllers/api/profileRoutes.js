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
  
//* Update event  
<<<<<<< HEAD
=======

>>>>>>> 4e63be114b9be50a3045701bef62ddc007462a0b





module.exports = router;

