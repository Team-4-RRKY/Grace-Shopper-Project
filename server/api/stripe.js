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
    // res.status(200).send('payment successful');
    await Cart.destroy({ where: { userId } });
    cartItems.forEach(async e => {
      const arr = await Order.findOrCreate({
        where: { userId, watchId: e.id },
      });
      await arr[0].update({ quantity: arr[0].quantity + e.cart.quantity });
      console.log('array', arr);
      const watch = await Watch.findById(e.id);
      console.log('watch', watch);
      await watch.update({ quantity: watch.quantity - e.cart.quantity });
    });
    const user = await User.scope('populated').findById(userId);
    res.json({ cartItems, user });
  })
);

// remove cartItems from Cart join table
// decrease quantity of purchased items available in watches model
// add purchased items to Order join table
// send the new user data back (with updated cart and sale items arrays) and redirect to the confirmation page
// potentially add the purchased items to a 'recently purchased' state
