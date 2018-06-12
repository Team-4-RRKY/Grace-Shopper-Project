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
  }),
});

// const watches = [
//   {
//     id: 1,
//     brand: 'Audemars Piguet',
//     model: '40 Series - 40MM',
//     image: 'http://www.pkicon.com/icons/31929/Clock-256.png',
//     price: '$120',
//     quantity: 15,
//     style: 'Classic',
//     tier: 'Luxurious',
//     gender: 'Gentleman',
//     sellerId: 17,
//   },
//   {
//     id: 2,
//     brand: 'Audemars Piguet',
//     model: '40 Series - 40MM',
//     image: 'http://www.pkicon.com/icons/31929/Clock-256.png',
//     price: '$120',
//     quantity: 15,
//     style: 'Classic',
//     tier: 'Luxurious',
//     gender: 'Gentleman',
//     sellerId: 17,
//   },
//   {
//     id: 3,
//     brand: 'Audemars Piguet',
//     model: '40 Series - 40MM',
//     image: 'http://www.pkicon.com/icons/31929/Clock-256.png',
//     price: '$120',
//     quantity: 15,
//     style: 'Classic',
//     tier: 'Luxurious',
//     gender: 'Gentleman',
//     sellerId: 17,
//   }
// ]

function CheckoutConfirmation(props) {
  const { classes } = props;
  const watches = props.purchased;

  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <Typography
          variant="display3"
          align="center">
          ..:: Order Confirmation::..
        </Typography>
        <div className="checkout-watch-div">
          {watches.map( watch => {
            return (
            <Typography
              key={watch.id}
              variant="headline"
              align="right">
              {watch.brand} -- {watch.model} || {watch.price}
            </Typography>
          )})}
        </div>
        <div className="checkout-total-div">
          <Typography
            variant="title"
            align="right">Order Total: $TOTAL
          </Typography>
        </div>
      </Paper>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.user.user,
  purchased: state.user.recentlyPurchased
})

export default connect( mapStateToProps)(withStyles(styles)(CheckoutConfirmation));

