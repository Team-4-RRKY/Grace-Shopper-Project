const router = require('express').Router();
const defaultHandler = require('./errorHandler');
const { User, Watch, Order, Cart } = require('../db/models');

module.exports = router;

//don't forget to HIDE password
router.get(
  '/',
  defaultHandler(async (req, res, next) => {
    const allUsers = await User.scope('populated').findAll();
    res.json(allUsers);
  })
);

router.get(
  '/:id',
  defaultHandler(async (req, res, next) => {
    const userId = req.params.id;
    const userInstance = await User.scope('populated').findById(userId);
    res.json(userInstance);
  })
);

router.post(
  '/',
  defaultHandler(async (req, res, next) => {
    const newUserInstance = await User.create(req.body);

    res.send({ message: 'New User Instance Created', newUserInstance });
  })
);

router.put(
  '/:id',
  defaultHandler(async (req, res, next) => {
    const updatedUsers = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
      returning: true,
      plain: true,
    });
    res.send({
      message: 'User Instance Updated',
      updatedUser: updatedUsers[1].dataValues
    });
  })
);

router.delete(
  '/:id',
  defaultHandler(async (req, res, next) => {
    await User.destroy(req.body, {
      where: {
        id: req.params.id,
      },
    });

    res.sendStatus(200);
  })
);

router.post(
  '/:id/cart',
  defaultHandler(async (req, res, next) => {
    const { userId } = req.body;
    await Cart.create(req.body);
    const user = await User.scope('populated').findById(userId);
    res.json(user);
  })
);

router.delete(
  '/:id/cart',
  defaultHandler(async (req, res, next) => {
    const { userId } = req.body;
    await Cart.destroy(req.body);
    const user = await User.scope('populated').findById(userId);
    res.json(user);
  })
);
