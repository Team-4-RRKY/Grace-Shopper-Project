const router = require('express').Router();
const defaultHandler = require('./errorHandler');
const { User, Watch } = require('../db/models');
module.exports = router;

//don't forget to HIDE password
router.get( '/', defaultHandler(async (req, res, next) => {
    await User.findAll({
      include: [{ model: Watch }]
    })
      .then(users => res.json(users))
      .catch(next);
  }));

router.get( '/:id', defaultHandler(async (req, res, next) => {
    const userId = req.params.id;

    const userInstance = await User.findById(userId, {
      include: [{ model: Watch }]
    });

    res.json(userInstance);
  }));

router.post( '/', defaultHandler( async (req, res, next) => {
  const newUserInstance = await User.create(req.body)
  res.send({message: 'New User Instance Created', newUserInstance})
}));

router.put('/:id', defaultHandler( async (req, res, next) => {
  await User.update(req.body, {where: {
    id: req.params.id
  }})
    res.send({message: 'User Instance Updated'})
}))

router.delete('/:id', defaultHandler( async (req, res, next) => {
  await User.delete(req.body, {where: {
    id: req.params.id
  }})
    res.send({message: 'User Instance Deleted'})
}))
