import React from 'react';
import { connect } from 'react-redux';
import {
  CardHeader,
  Card,
  Typography,
  CardContent,
  Button
} from '@material-ui/core';
import {
  addToCart,
  getGuestCart,
  addToGuestCart,
  getForeignUser
} from '../../store/user.js';
import ForeignUser from '../user-components/ForeignUser.jsx';

class WatchSingleView extends React.Component {
  state = {
    open: false
  };
  handleOpen = async watch => {
    await this.props.getForeignUser(watch.sellerId);
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

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
        <div className="row wrap">
          <Card className="card pos .card">
            <CardContent>
            <Typography variant="title">Brand: {watch.brand}</Typography>
              <Typography variant="title">Model: {watch.model}</Typography>
              <img src={watch.image} id="watch-img" />
              <Typography variant="title">Price: {watch.price}.00</Typography>
            </CardContent>

            <Button
            color="primary"
            variant="contained"
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
          <Button
            color="primary"
            variant="contained"
            onClick={() => this.handleOpen(watch)}
          >
            View Seller
          </Button>
          {this.state.open ? (
            <div>
              <ForeignUser fUser={this.props.fUser} />{' '}
              <Button color="primary" variant="contained" onClick={this.handleClose}>Close This User's Page</Button>
            </div>
          ) : (
            <div />
          )}
        </div>
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
  fUser: state.user.fUser
});

const mapDispatchToProps = dispatch => ({
  addToCart: cartData => dispatch(addToCart(cartData)),
  getGuestCart: () => dispatch(getGuestCart()),
  getForeignUser: id => dispatch(getForeignUser(id)),
  addToGuestCart: (watch, guestCart) =>
    dispatch(addToGuestCart(watch, guestCart))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WatchSingleView);
