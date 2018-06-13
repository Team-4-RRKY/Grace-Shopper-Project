const router = require('express').Router();
// const key = process.env.key;
const stripe = require('stripe')('sk_test_CyRumQUmuDvornXKIsHjIrQL');
const defaultHandler = require('./errorHandler');
const { User, Watch, Order, Cart } = require('../db/models');

module.exports = router;

router.post(
  '/',
  defaultHandler(async (req, res, next) => {
    const userId = req.body.user.id;
    const { cartItems } = req.body.user;
    stripe._api.auth = `Bearer sk_test_CyRumQUmuDvornXKIsHjIrQL`;
    console.log(stripe);
    const charge = await stripe.charges.create({
      amount: req.body.amount,
      currency: 'USD',
      description: 'watch shop',
      source: req.body.token.id,
    });
    console.log('after', charge);
    if (!req.body.user.id) {
      cartItems.forEach(async e => {
        const watch = await Watch.findById(e.id);
        await watch.update({ quantity: watch.quantity - e.cart.quantity });
        res.json({ cartItems, user: {} });
      });
    } else {
      await Cart.destroy({ where: { userId } });
      cartItems.forEach(async e => {
        const arr = await Order.findOrCreate({
          where: { userId, watchId: e.id },
        });
        await arr[0].update({ quantity: arr[0].quantity + e.cart.quantity });
        const watch = await Watch.findById(e.id);
        await watch.update({ quantity: watch.quantity - e.cart.quantity });
      });
      const user = await User.scope('populated').findById(userId);
      res.json({ cartItems, user });
    }
  })
);
