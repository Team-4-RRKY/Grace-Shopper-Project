import React from 'react';
import { connect } from 'react-redux';

class WatchSingleView extends React.Component {
  handleBuy = event => {
    event.preventDefault();
    console.log('buy me');
  };

  handleSell = event => {
    event.preventDefault();
    console.log('Sell me');
  };

  render() {
    const watch = this.props.watch;
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
            <button type="submit" onClick={this.handleBuy}>
              Add To Cart
            </button>
            {/* Sell button enabled if logged */}
            <button type="submit" onClick={this.handleSell}>
              Sell
            </button>
          </div>
        </div>
      );
    } else {
      return <h1>..Loading</h1>;
    }
  }
}

const mapStateToProps = state => ({
  watch: state.watch.watch
});

export default connect(mapStateToProps)(WatchSingleView);
