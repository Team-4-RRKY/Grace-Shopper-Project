import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../store/user.js';

class WatchSingleView extends React.Component {
  render() {
    const watchId = +this.props.match.params.id;
    const watch = this.props.watches.find(e => e.id === watchId);
    const userId = this.props.user.id;
    const cartData = { userId, watchId };
    console.log(cartData);
    if (watch) {
      return (
        <div className="detail">
          <h4>brand: {watch.brand}</h4>
          <h4>price: {watch.price}</h4>
          <h4>tier: {watch.tier}</h4>
          <h4>style: {watch.style}</h4>
          <h4>quantity: {watch.quantity}</h4>
          <img src={watch.image} alt="image" />
          <div>
            <button
              type="submit"
              onClick={() => this.props.addToCart(cartData)}
            >
              Add To Cart
            </button>
            {/* Sell button enabled if logged */}
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
