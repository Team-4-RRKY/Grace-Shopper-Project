import React from 'react';
import { connect } from 'react-redux';
import { CardHeader, Card, Typography, CardContent, Button } from '@material-ui/core';
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
        <Card className="card pos .card" >
          <CardHeader title={watch.brand} />
          <CardContent>
            <Typography>{watch.model}</Typography>
            <img src={watch.image} />
            <Typography> {watch.price}</Typography>
          </CardContent>

          <Button disabled={numInCart >= quantity} onClick={() => {
                if (userId) {
                  this.props.addToCart(cartData);
                } else {
                  this.addToGuestCart(watch);
                }
              }}>Add To Cart</Button>
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
});

const mapDispatchToProps = dispatch => ({
  addToCart: cartData => dispatch(addToCart(cartData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WatchSingleView);
