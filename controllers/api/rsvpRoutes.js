const router = require('express').Router();
const { Rsvp, Event, User } = require('../../models');


router.get('/', async (req, res) => {
  try {
   
    const rsvpData = await Rsvp.findAll({
      include: [
          {
              model: User, 
              attributes: ['id', 'username'],
          },
        {
          model: Event,
          attributes: ['id'],
        },
      ],
    });

   
    const rsvps = rsvpData.map((rsvp) => rsvp.get({ plain: true }));

    console.log(rsvps);
    res.render('rsvp', { 
      rsvps, 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


        
router.post('/:user_id/:event_id', async (req, res) => {
  try {
    const rsvpData = await Rsvp.create({
      where: {
        rsvp_message: req.body.message,
        id: req.params.id,
        user_id: req.params.user_id,
        event_id: req.params.event_id,
      },
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
          user_id: req.params.user_id,
          event_id: req.params.event_id,
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