import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { removeFromCart } from '../../store/user.js';

class Cart extends React.Component {
  render() {
    const { cartItems } = this.props.user;
    const userId = this.props.user.id;
    if (!cartItems) return <div>Loading..</div>;
    return (
      <div>
        <h1>Your Shopping Cart</h1>
        {cartItems.map(e => {
          let { brand, model, price } = e;
          let cartData = { userId, watchId: e.id };
          return (
            <div key={e.id}>
              <div>
                <h4>{e.brand}</h4>
                <h6>{e.model}</h6>
              </div>
              <div>
                <h6>Quant</h6>
                <button>Less</button>
                <button>More</button>
                <button onClick={() => this.props.removeFromCart(cartData)}>
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
});

const mapDispatchToProps = dispatch => ({
  removeFromCart: cartData => dispatch(removeFromCart(cartData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
