import React from 'react';
import { connect } from 'react-redux';
import { filteredWatches } from '../../store/watch.js';
import { Button, CircularProgress, Modal } from '@material-ui/core';
import { ranges, styles } from '../commonUtils';

class FilterWatches extends React.Component {
  state = {
    brand: '',
    style: '',
    gender: '',
    price: '',
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handlePricechange = event => {
    console.log(this.state.price.length);
    this.setState({
      price: event.target.value.split(','),
    });
  };

  handlefilter = event => {
    event.preventDefault();
    let { brand, gender, style, price } = this.state;
    if (!price[0]) {
      price = false;
    }
    const filtered = this.props.allWatches.filter(watch => {
      return (
        (brand ? watch.brand === brand : true) &&
        (gender ? watch.gender === gender : true) &&
        (price ? price.includes(watch.price) : true) &&
        (style ? watch.style === style : true)
      );
    });
    this.props.filteredWatches(filtered);
  };

  handleReset = () => {
    const filtered = this.props.allWatches;
    this.props.filteredWatches(filtered);
    this.setState({
      brand: '',
      style: '',
      gender: '',
      price: [],
    });
  };

  /* price.includes(watch.price) */
  getUniq(arr, val) {
    const res = [];
    for (var i = 0; i < arr.length; i++) {
      if (res.indexOf(arr[i][val]) === -1) {
        res.push(arr[i][val]);
      }
    }
    return res;
  }

  render() {
    const watches = this.props.filtered;
    const allWatches = this.props.allWatches;
    // if (watches[0] === undefined) {
    //   return <CircularProgress />;
    // }
    return (
      <form
        onSubmit={this.handlefilter}
        onReset={this.handleReset}
        className="filter_form"
      >
        {/* Gender */}
        {/* <span>
          <h3>Please Select Gender and Price Range</h3>
        </span> */}
        <div className="column wrap">
          <label>Gender*</label>
          <select
            name="gender"
            onChange={this.handleChange}
            value={this.state.gender}
          >
            <option value="">Choose...</option>
            {this.getUniq(allWatches, 'gender').map(gender => {
              return (
                <option value={gender} key={gender}>
                  {gender}
                </option>
              );
            })}
          </select>

          {/* price */}
          <label>Price Range</label>
          <select
            name="price"
            onChange={this.handlePricechange}
            /* value={this.state.price} */
          >
            <option value="">Choose...</option>

            <option
              value={this.getUniq(allWatches, 'price').filter(pp => {
                return pp.slice(1) < 100;
              })}
            >
              less than $100
            </option>

            <option
              value={this.getUniq(allWatches, 'price').filter(pp => {
                return pp.slice(1) > 100 && pp.slice(1) < 150;
              })}
            >
              $100-$150
            </option>

            <option
              value={this.getUniq(allWatches, 'price').filter(pp => {
                return pp.slice(1) > 150;
              })}
            >
              more than $150
            </option>
          </select>

          {/* Brand */}
          <label>Brand</label>
          <select
            name="brand"
            onChange={this.handleChange}
            value={this.state.brand}
          >
            <option value="">Choose...</option>
            {this.getUniq(allWatches, 'brand').map(brand => {
              return (
                <option value={brand} key={brand}>
                  {brand}
                </option>
              );
            })}
          </select>

          {/* style */}
          <label>Style</label>
          <select
            name="style"
            onChange={this.handleChange}
            value={this.state.style}
          >
            <option value="">Choose...</option>
            {this.getUniq(allWatches, 'style').map(style => {
              return (
                <option value={style} key={style}>
                  {style}
                </option>
              );
            })}
          </select>
        </div>

        {/* tier
        <label>tier</label>
        <select name="tier" onChange={this.handleChange}>
        <option>Tier</option>
          {this.getUniq(allWatches, 'tier').map(tier => {
            return (
              <option value={tier} key={tier}>
                {tier}
              </option>
            );
          })}
        </select>
 */}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={!this.state.gender}
        >
          Filter
        </Button>
        <Button type="reset" variant="contained" color="secondary">
          reset
        </Button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  allWatches: state.watch.allWatches,
  filtered: state.watch.filteredWatches,
});

const mapDispatchToProps = dispatch => ({
  filteredWatches: watches => {
    dispatch(filteredWatches(watches));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterWatches);
