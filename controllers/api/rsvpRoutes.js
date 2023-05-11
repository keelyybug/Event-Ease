const router = require('express').Router();
const { Rsvp } = require('../../models');

router.get('/', async (req, res) => {
    try {
     
      const rsvpData = await Rsvp.findAll({
        include: [
            {
                model: User, 
                attributes: ['id'],
            },
          {
            model: Event,
            attributes: ['id'],
          },
        ],
      });
  
     
      const rsvps = rsvpData.map((rsvp) => project.get({ plain: true }));
  
  
      res.render('rsvp', { 
        rsvps, 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.post('/:id', async (req, res) => {
    try {
      const rsvpData = await Rsvp.create({
        ...req.body,
        user_id: req.session.user_id,
        event_id: req.session.event_id
      });
  
      res.status(200).json(rsvpData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const rsvpData = await Rsvp.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
          event_id: req.session.event_id,
        },
      });
  
      if (!rsvpData) {
        res.status(404).json({ message: 'No RSVP found with this id!' });
        return;
      }
  
      res.status(200).json(rsvpData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;