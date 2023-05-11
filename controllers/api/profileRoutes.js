const router = require('express').Router();
const { Event } = require('../../models');
const withAuth = require('../../utils/auth');

//* Get event by ID
router.get('/event/:id', async (req, res) => {
    try {
      const eventData = await Event.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
  
      const event = eventData.get({ plain: true });
  
      res.render('event', {
        ...event,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });



//* Create event
router.post('/event/:id', withAuth, async (req, res) => {
    try{
        const createEvent = await Event.create({
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
      const projectData = await Project.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!projectData) {
        res.status(404).json({ message: 'No project found with this id!' });
        return;
      }
  
      res.status(200).json(projectData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;

