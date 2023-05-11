const router = require('express').Router();
const { User, Event, Rsvp } = require('../../models');
const withAuth = require('../../utils/auth');

//* Get event by ID
router.get('/event/:id', async (req, res) => {
    try {
      const eventData = await Event.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
      });
  
      const event = eventData.get({ plain: true });
  
      res.render('myevent', {
        ...event,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });



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
router.put('/event/:id', withAuth, async (req, res) => {
    try{
        const editEvent = await Event.update({
            event_title: req.body.event_title,
            event_description: req.body.event_description,
            event_date: req.body.event_date
        },
        {
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            },
        });

        res.status(200).json(editEvent);
    } catch (err) {
        res.status(500).json(err);
    }
});


  //* Delete event
  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const eventData = await Event.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!eventData) {
        res.status(404).json({ message: 'No event found with this id!' });
        return;
      }
  
      res.status(200).json(eventData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;

