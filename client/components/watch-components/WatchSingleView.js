import React from 'react';
import { connect } from 'react-redux';
import {
  CardHeader,
  Card,
  Typography,
  CardContent,
  Button,
} from '@material-ui/core';
import { addToCart, getGuestCart, addToGuestCart } from '../../store/user.js';

class WatchSingleView extends React.Component {
  render() {
    const watchId = +this.props.match.params.id;
    const watch = this.props.watches.find(e => e.id === watchId);
    const userId = this.props.user.id;
    const cartData = { userId, watchId, num: 1 };
    const cartItems = this.props.user.cartItems || this.props.guestCart;
    const watchInCart = cartItems && cartItems.find(e => e.id === watchId);
    const numInCart = watchInCart && watchInCart.cart.quantity;
    const quantity = watch && watch.quantity;
    if (watch) {
      return (
        <Card className="card pos .card">
          <CardHeader title={watch.brand} />
          <CardContent>
            <Typography>{watch.model}</Typography>
            <img src={watch.image} />
            <Typography> {watch.price}</Typography>
          </CardContent>

          <Button
            disabled={numInCart >= quantity}
            onClick={() => {
              if (userId) {
                this.props.addToCart(cartData);
              } else {
                this.props.addToGuestCart(watch, this.props.guestCart);
              }
            }}
          >
            Add To Cart
          </Button>
          {numInCart >= quantity ? <h4>Maximum quantity reached!</h4> : null}
        </Card>
      );
    } else {
      return <h1>..Loading</h1>;
    }
  }
}

const mapStateToProps = state => ({
  watches: state.watch.allWatches,
  user: state.user.user,
  guestCart: state.user.guestCart,
});

const mapDispatchToProps = dispatch => ({
  addToCart: cartData => dispatch(addToCart(cartData)),
  getGuestCart: () => dispatch(getGuestCart()),
  addToGuestCart: (watch, guestCart) =>
    dispatch(addToGuestCart(watch, guestCart)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WatchSingleView);
