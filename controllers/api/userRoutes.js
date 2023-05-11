const router = require('express').Router();
const { User } = require('../../models');

//* Create new user (sign up)
router.post('/signup', async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      first: req.body.first,
      last: req.body.last
    });

    const user = dbUserData.map((rsvp) => user.get({ plain: true }));

    res.render('signup', { 
      user, 
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(user);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//* log in 
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

//* log out
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;