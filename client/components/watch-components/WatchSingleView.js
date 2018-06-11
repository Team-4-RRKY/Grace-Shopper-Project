import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../store/user.js';

class WatchSingleView extends React.Component {
  addToGuestCart = watch => {
    // localStorage.removeItem('cartItems');
    let str = localStorage.cartItems || undefined;
    let arr = str ? JSON.parse(str) : [];
    console.log(arr);
    watch = arr.find(e => e.id === watch.id);
    console.log(watch);
    watch ? watch.cart.quantity++ : (watch.cart = { quantity: 1 });
    arr.push(watch);
    arr.sort((a, b) => (a.id > b.id ? -1 : 1));
    str = JSON.stringify(arr);
    localStorage.cartItems = str;
    console.log(localStorage.cartItems);
  };

  /*
  check to see if local storage exists
  convert it to an array
  when (add) is hit, check to see if the array already has that watch
    if it does, add one to the quantity on that watch
    if it does not, give it .cart = {quantity: 1} and add to the array
  convert it to string and rest local storage
  */
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
              disabled={numInCart >= quantity}
              type="submit"
              onClick={() => {
                if (userId) {
                  this.props.addToCart(cartData);
                } else {
                  this.addToGuestCart(watch);
                }
              }}
            >
              Add To Cart
            </button>
            {numInCart >= quantity ? <h4>Maximum quantity reached!</h4> : null}
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
