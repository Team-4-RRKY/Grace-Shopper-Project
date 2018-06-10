import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../store/user.js';

class WatchSingleView extends React.Component {
  render() {
    const watchId = +this.props.match.params.id;
    const watch = this.props.watches.find(e => e.id === watchId);
    const userId = this.props.user.id;
    const cartData = { userId, watchId, num: 1 };
    const watchInCart =
      this.props.user.cartItems &&
      this.props.user.cartItems.find(e => e.id === watchId);
    const numInCart = watchInCart && watchInCart.cart.quantity;
    const quantity = watch && watch.quantity;
    if (watch) {
      return (
        <div className="detail">
          <h3>{watch.brand}</h3>
          <h4>{watch.model}</h4>
          <h4>Price: {watch.price}</h4>
          <h5>Tier: {watch.tier}</h5>
          <h5>Style: {watch.style}</h5>
          <h5>Quantity: {watch.quantity}</h5>
          <img src={watch.image} alt="image" />
          <div>
            <button
              disabled={numInCart === quantity}
              type="submit"
              onClick={() => {
                if (userId) {
                  this.props.addToCart(cartData);
                }
              }}
            >
              Add To Cart
            </button>
            {numInCart === quantity ? <h4>Maximum quantity reached!</h4> : null}
          </div>
        </div>
      );
    } else {
      return <h1>..Loading</h1>;
    }
  }
}

const mapStateToProps = state => ({
  watches: state.watch.watches,
  user: state.user.user,
});

const mapDispatchToProps = dispatch => ({
  addToCart: cartData => dispatch(addToCart(cartData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WatchSingleView);
