import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    paddingLeft: 16,
    paddingRight: 16,
  }),
});

const CheckoutConfirmation = (props) => {
  const { classes } = props;
  const watches = props.purchased;
  let total = 0;

  watches.forEach(watch => {
    let price = Number(watch.price.slice(1))

    let watchTotal = 0
    if (watch.cart.quantity > 0){
      watchTotal = price * watch.cart.quantity;
      total += watchTotal;
    } else {
      total += price
    }
  })


  return (
    <div className="checkout-paper">
      <Paper className={classes.root} elevation={4}>
        <Typography
          variant="display3"
          align="center">
          ..::Order Confirmation::..
        </Typography>
        <div className="checkout-watch-div">
          {watches.map( watch => {
            return (
            <Typography
              key={watch.id}
              variant="headline"
              align="right">
              Quantity: {watch.cart.quantity} -- {watch.brand} -- {watch.model} || {watch.price}
            </Typography>
          )})}
        </div>
        <div className="checkout-total-div">
          <Typography
            variant="title"
            align="right">Order Total: ${total}
          </Typography>
        </div>
        <Typography variant="caption" gutterBottom align="center">
        Thank you for shopping at BayWatch!
      </Typography>
      </Paper>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.user.user,
  purchased: state.user.recentlyPurchased
})

export default connect( mapStateToProps)(withStyles(styles)(CheckoutConfirmation));

