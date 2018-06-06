const router = require('express').Router();
const defaultHandler = require('./errorHandler');
const { User, Watch } = require('../db/models');
module.exports = router;

//don't forget to HIDE password
router.get( '/', defaultHandler(async (req, res, next) => {
  const allUsers = await User.findAll({
    include: [{ model: Watch }]
  });

  res.json(allUsers);
}));

router.get( '/:id', defaultHandler(async (req, res, next) => {
  const userId = req.params.id;
  const userInstance = await User.findById(userId, {
    include: [{ model: Watch }]
  });

  res.json(userInstance);
}));

router.post( '/', defaultHandler(async (req, res, next) => {
  const newUserInstance = await User.create(req.body);

  res.send({ message: 'New User Instance Created', newUserInstance });
}));

router.put( '/:id', defaultHandler(async (req, res, next) => {
  const updatedUsers = await User.update(req.body, {
    where: {
      id: req.params.id
    },
    returning: true,
    plain: true
  });

  res.send({
    message: 'User Instance Updated',
    updatedUser: updatedUsers[1][0]
  });
}));

router.delete( '/:id', defaultHandler(async (req, res, next) => {
  await User.destroy(req.body, {
    where: {
      id: req.params.id
    }
  });

  res.sendStatus(200);
}));
