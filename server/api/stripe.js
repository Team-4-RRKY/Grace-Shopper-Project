const router = require('express').Router();
const key = process.env.key;
const stripe = require('stripe')(key);
const defaultHandler = require('./errorHandler');
const { User, Watch, Order, Cart } = require('../db/models');

module.exports = router;

router.post(
  '/',
  defaultHandler(async (req, res, next) => {
    const userId = req.body.user.id;
    const { cartItems } = req.body.user;
    const charge = await stripe.charges.create({
      amount: req.body.amount,
      currency: 'USD',
      description: 'watch shop',
      source: req.body.token.id,
    });
    if (!req.body.user.id) {
      cartItems.forEach(async e => {
        const watch = await Watch.findById(e.id);
        await watch.update({ quantity: watch.quantity - e.cart.quantity });
        res.json({ cartItems, user: {} });
      });
    } else {
      await Cart.destroy({ where: { userId } });
      const promises = cartItems.map(async e => {
        const arr = await Order.findOrCreate({
          where: { userId, watchId: e.id },
        });
        arr[0].update({ quantity: arr[0].quantity + e.cart.quantity });
        const watch = await Watch.findById(e.id);
        watch.update({ quantity: watch.quantity - e.cart.quantity });
      });
      await Promise.all(promises);
      const user = await User.scope('populated').findById(userId);
      res.json({ cartItems, user });
    }
  })
);
