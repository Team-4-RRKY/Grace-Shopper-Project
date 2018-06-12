const router = require('express').Router();
const defaultHandler = require('./errorHandler');
const { User, Watch, Order, Cart } = require('../db/models');
const stripe = require('stripe')('pk_test_Xo8ZfZ3YoD5q5hvQDFc9ASP1');

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
        id: req.params.id
      },
      returning: true,
      plain: true
    });
    res.send({
      message: 'User Instance Updated',
      updatedUser: updatedUsers[1].dataValues,
    });
  })
);

router.delete(
  '/:id',
  defaultHandler(async (req, res, next) => {
    await User.destroy(req.body, {
      where: {
        id: req.params.id
      }
    });

    res.sendStatus(200);
  })
);

router.post(
  '/:id/cart',
  defaultHandler(async (req, res, next) => {
    const { userId, watchId, num } = req.body;
    const arr = await Cart.findOrCreate({ where: { userId, watchId } });
    if (!arr[1]) {
      await arr[0].update({ quantity: arr[0].quantity + num });
    }
    const user = await User.scope('populated').findById(userId);
    res.json(user);
  })
);

router.delete(
  '/:id/cart',
  defaultHandler(async (req, res, next) => {
    const { userId, watchId } = req.body;
    await Cart.destroy({ where: { userId, watchId } });
    const user = await User.scope('populated').findById(userId);
    res.json(user);
  })
);

router.post(
  '/:id/cart/merge',
  defaultHandler(async (req, res, next) => {
    const userId = req.params.id;
    const localCart = req.body;
    // const promises = [];
    console.log(localCart);
    localCart.forEach(async e => {
      const arr = await Cart.findOrCreate({ where: { userId, watchId: e.id } });
      if (!arr[1]) {
        await arr[0].update({ quantity: arr[0].quantity + e.cart.quantity });
      } else {
        await arr[0].update({ quantity: e.cart.quantity });
      }
    });
    const user = await User.scope('populated').findById(userId);
    res.json(user);
  })
);
