const router = require('express').Router();
const stripe = require('stripe')('sk_test_VDDsUcoKwz33ladRWKHboxYB');

module.exports = router;

/* const postStripeCharge = res => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr });
  } else {
    res.status(200).send({ success: stripeRes });
  }
}; */

router.get('/', async (req, res, next) => {
  res.send({ message: 'Hello Stripe checkout server!' });
});

router.post('/', async (req, res, next) => {
  /* console.log('request here', req); */
  const charge = await stripe.charges.create(
    {
      amount: req.body.amount,
      currency: 'USD',
      description: 'watch shop',
      /* stripeKey: 'sk_test_VDDsUcoKwz33ladRWKHboxYB', */
      source: req.body.token.id
    } /* postStripeCharge(res) */
  );
  res.status(200).send('payment successful');
});
