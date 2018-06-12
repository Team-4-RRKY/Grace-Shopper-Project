import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import {
  removeFromCart,
  addToCart,
  updateGuestCart,
  removeFromGuestCart,
} from '../../store/user.js';
const { apiKey } = require('../../../secrets.js');

import StripeCheckout from 'react-stripe-checkout';
import { postPayment } from '../../store/user.js';

class Cart extends React.Component {
  render() {
    let cartItems = this.props.user.cartItems || this.props.guestCart;
    if (cartItems) {
      cartItems.sort((a, b) => (a.cart.createdAt > b.cart.createdAt ? -1 : 1));
    }
    const userId = this.props.user.id;
    let sum = 0;
    if (!(typeof this.props.user === 'object')) return <div>Loading..</div>;
    // cartItems = cartItems || localStorage.cartItems || [];
    const { handleToken } = this.props;
    const user = this.props.user;
    return (
      <div>
        <h1>Your Shopping Cart</h1>
        {cartItems.map(e => {
          let { brand, model, price } = e;
          let addCartData = { userId, watchId: e.id, num: 1 };
          let removeCartData = { userId, watchId: e.id, num: -1 };
          let total = e.cart.quantity * e.price.slice(1);
          sum += total;
          return (
            <div key={e.id}>
              <div>
                <h4>{e.brand}</h4>
                <h6>{e.model}</h6>
                <h6>Price: {e.price}</h6>
              </div>
              <div>
                <h6>{`Quantity: ${e.cart.quantity}`}</h6>
                <span>
                  {e.cart.quantity >= e.quantity ? (
                    <h4>Maximum quantity reached!</h4>
                  ) : null}
                </span>
                <h5>Total: ${total}</h5>
                <button
                  onClick={
                    userId
                      ? e.cart.quantity === 1
                        ? () => this.props.removeFromCart(removeCartData)
                        : () => this.props.updateCart(removeCartData)
                      : e.cart.quantity === 1
                        ? () =>
                            this.props.removeFromGuestCart(
                              e,
                              this.props.guestCart
                            )
                        : () =>
                            this.props.updateGuestCart(
                              e,
                              this.props.guestCart,
                              -1
                            )
                  }
                >
                  Less
                </button>
                <button
                  disabled={e.cart.quantity >= e.quantity}
                  onClick={
                    userId
                      ? () => this.props.updateCart(addCartData)
                      : () =>
                          this.props.updateGuestCart(e, this.props.guestCart, 1)
                  }
                >
                  More
                </button>
                <button
                  onClick={
                    userId
                      ? () => this.props.removeFromCart(removeCartData)
                      : () =>
                          this.props.removeFromGuestCart(
                            e,
                            this.props.guestCart
                          )
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
        <div>
          <h3>Total Price: ${sum}</h3>
          <StripeCheckout
            name="BayWatch"
            amount={sum * 100}
            token={
              user.id
                ? token => handleToken(token, sum * 100, user)
                : token => handleToken(token, sum * 100, { cartItems })
            }
            stripeKey={apiKey}
            currency="USD"
          >
            <button className="positive ui button" type="submit">
              Checkout
            </button>
          </StripeCheckout>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  guestCart: state.user.guestCart,
});

const mapDispatchToProps = dispatch => ({
  removeFromCart: cartData => dispatch(removeFromCart(cartData)),
  updateCart: cartData => dispatch(addToCart(cartData)),
  updateGuestCart: (watch, guestCart, num) =>
    dispatch(updateGuestCart(watch, guestCart, num)),
  removeFromGuestCart: (watch, guestCart) =>
    dispatch(removeFromGuestCart(watch, guestCart)),
  handleToken(token, amount, user) {
    dispatch(postPayment(token, amount, user));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
