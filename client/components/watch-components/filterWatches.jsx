import React from 'react';
import { connect } from 'react-redux';
import { filteredWatches } from '../../store/watch.js';

class FilterWatches extends React.Component {
  state = {
    brand: '',
    tier: '',
    style: '',
    gender: ''
  };

  handleChange = event => {
    console.log(event);
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  };

  handlefilter = event => {
    event.preventDefault();
    const { brand, tier, gender } = this.state;
    console.log('state', this.state);
    const filtered = this.props.allWatches.filter((watch, idx) => {
      if (idx === 0) {
        console.log(watch.brand, brand);
        console.log(watch.gender, gender);
        console.log(watch.tier, tier);
      }
      // watch.brand === brand && watch.gender === gender && watch.tier === tier
      return (
        watch.brand === brand && watch.gender === gender && watch.tier === tier
      );
    });
    this.props.filteredWatches(filtered);
  };

  getUniq(arr, val) {
    const res = [];
    console.log('arr', arr);
    for (var i = 0; i < arr.length; i++) {
      if (res.indexOf(arr[i][val]) === -1) {
        console.log('test');
        res.push(arr[i][val]);
      }
    }
    return res;
  }

  render() {
    const watches = this.props.filtered;
    const allWatches = this.props.allWatches;
    if (watches[0] === undefined) {
      return <div>..Loading</div>;
    }
    return (
      <form onSubmit={this.handlefilter}>
        {/* Gender */}
        <label>Gender</label>
        <select name="gender" onChange={this.handleChange}>
          <option>**</option>
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
          <option>**</option>
          {this.getUniq(allWatches, 'brand').map(brand => {
            return (
              <option value={brand} key={brand}>
                {brand}
              </option>
            );
          })}
        </select>

        {/* style */}
        {/* <label>style</label>
        <select name="style" onChange={this.handleChange}>
          <option value={style}>**</option>
          {this.getUniq(watches, 'style').map(style => {
            return (
              <option value="style" key={style}>
                {style}
              </option>
            );
          })}
        </select> */}

        {/* tier */}
        <label>tier</label>
        <select name="tier" onChange={this.handleChange}>
          <option>**</option>
          {this.getUniq(allWatches, 'tier').map(tier => {
            return (
              <option value={tier} key={tier}>
                {tier}
              </option>
            );
          })}
        </select>
        <button type="submit">Apply</button>
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
