import React from 'react';
import { connect } from 'react-redux';
import { filteredWatches } from '../../store/watch.js';

class FilterWatches extends React.Component {
  state = {
    brand: '',
    tier: '',
    style: '',
    gender: '',
    price: ''
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log('STATE HERE', this.state);
  };

  handlefilter = event => {
    event.preventDefault();
    const { brand, tier, gender, style, price } = this.state;

    //if gender is the only selected , return allWatches filtered by gender only
    const filtered = this.props.allWatches.filter(watch => {
      return (
        (brand ? watch.brand === brand : true) &&
        (gender ? watch.gender === gender : true) &&
        (price ? watch.price === price : true) &&
        (style ? watch.style === style : true)
      );
    });
    this.props.filteredWatches(filtered);
  };

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
    /* console.log(
      'prices here',
      this.getUniq(allWatches, 'price').filter(pp => {
        return pp.slice(1) > 100 && pp.slice(1) < 150;
      })
    ); */
    if (watches[0] === undefined) {
      return <div>..Loading</div>;
    }
    return (
      <form onSubmit={this.handlefilter}>
        {/* Gender */}
        <label>Gender</label>
        <select name="gender" onChange={this.handleChange}>
          <option>Gender</option>
          {this.getUniq(allWatches, 'gender').map(gender => {
            return (
              <option value={gender} key={gender}>
                {gender}
              </option>
            );
          })}
        </select>

        {/* Brand */}
        <label>Brand</label>
        <select name="brand" onChange={this.handleChange}>
          <option>Brand</option>
          {this.getUniq(allWatches, 'brand').map(brand => {
            return (
              <option value={brand} key={brand}>
                {brand}
              </option>
            );
          })}
        </select>

        {/* style */}
        <label>style</label>
        <select name="style" onChange={this.handleChange}>
          <option>Style</option>
          {this.getUniq(allWatches, 'style').map(style => {
            return (
              <option value={style} key={style}>
                {style}
              </option>
            );
          })}
        </select>

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
        {/* price */}
        <label>price</label>
        <select name="price" onChange={this.handleChange}>
          <option>Price Range</option>

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

        <button type="submit">Filter</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  allWatches: state.watch.allWatches,
  filtered: state.watch.filteredWatches
});

const mapDispatchToProps = dispatch => ({
  filteredWatches: watches => {
    dispatch(filteredWatches(watches));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterWatches);
