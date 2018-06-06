const router = require('express').Router();
const defaultHandler = require('./errorHandler');
const { User, Watch } = require('../db/models');
module.exports = router;

//don't forget to HIDE password
router.get( '/', defaultHandler(async (req, res, next) => {
  const allUsers = await User.findAll({
    include: [{ model: Watch }]
  })
  res.json(allUsers)
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
  //Can I use null in place of numOfUsers
  const [ numOfUsers, updatedUsers ] = await User.update(req.body, {
    where: {
    id: req.params.id
  },
  returning: true,
  plain: true
})

    res.send({ message: 'User Instance Updated', updatedUsers[0] })
}))

router.delete('/:id', defaultHandler( async (req, res, next) => {
  await User.delete(req.body, {where: {
    id: req.params.id
  }})
    res.send({message: 'User Instance Deleted'})
}))
