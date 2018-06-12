const router = require('express').Router();
const stripe = require('stripe')('sk_test_VDDsUcoKwz33ladRWKHboxYB');
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

// decrease quantity of purchased items available in watches model
// send the new user data back (with updated cart and sale items arrays) and redirect to the confirmation page
// potentially add the purchased items to a 'recently purchased' state
