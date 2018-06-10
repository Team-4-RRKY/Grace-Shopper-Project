import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { removeFromCart, addToCart } from '../../store/user.js';

class Cart extends React.Component {
  render() {
    let { cartItems } = this.props.user;
    if (cartItems) {
      cartItems.sort((a, b) => (a.cart.createdAt > b.cart.createdAt ? -1 : 1));
    }
    const userId = this.props.user.id;
    let sum = 0;
    if (!(typeof this.props.user === 'object')) return <div>Loading..</div>;
    cartItems = cartItems || localStorage.cartItems || [];
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
                  {e.cart.quantity === e.quantity ? (
                    <h4>Maximum quantity reached!</h4>
                  ) : null}
                </span>
                <h5>Total: ${total}</h5>
                <button
                  onClick={
                    e.cart.quantity === 1
                      ? () => this.props.removeFromCart(removeCartData)
                      : () => this.props.updateCart(removeCartData)
                  }
                >
                  Less
                </button>
                <button
                  disabled={e.cart.quantity === e.quantity}
                  onClick={() => this.props.updateCart(addCartData)}
                >
                  More
                </button>
                <button
                  onClick={() => this.props.removeFromCart(removeCartData)}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
        <div>
          <h3>Total Price: ${sum}</h3>
          <button>Checkout</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
});

const mapDispatchToProps = dispatch => ({
  removeFromCart: cartData => dispatch(removeFromCart(cartData)),
  updateCart: cartData => dispatch(addToCart(cartData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
