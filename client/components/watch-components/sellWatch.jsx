import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, TextField, InputAdornment, MenuItem, Input } from '@material-ui/core';
import { listWatch } from '../../store/watch';
import { ranges, styles } from '../../components/commonUtils';


class SellWatch extends Component {
  state = {
    sellerId: this.props.user.id,
    model: '',
    brand: '',
    price: '',
    image: '',
    gender: '',
    style: '',
    quantity: '',
    description: ''
  };

  handleChange = event => {
    console.log(this.state);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.postWatch(this.state)
  };

  render() {
    return (
      <form id="sell-watch"onSubmit={this.handleSubmit} className="form column">
        <TextField
          className="input"
          label="Brand"
          type="text"
          name="brand"
          onChange={this.handleChange}
          value={this.state.brand}
        />
        <TextField
          className="input"
          label="Model"
          type="text"
          name="model"
          onChange={this.handleChange}
          value={this.state.model}
        />
        <TextField
          className="input"
          label="Price"
          type="text"
          name="price"
          onChange={this.handleChange}
          value={this.state.price}
          inputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>
          }}
        />
        <TextField
          className="input"
          label="Image of Product"
          type="text"
          name="image"
          onChange={this.handleChange}
          value={this.state.image}
        />
        <TextField
          select
          className="input"
          label="Gender"
          type="text"
          name="gender"
          onChange={this.handleChange}
          value={this.state.gender}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Gender</InputAdornment>
            )
          }}
        >
          {' '}
          {ranges.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          className="input"
          label="Style"
          type="text"
          name="style"
          onChange={this.handleChange}
          value={this.state.style}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Style</InputAdornment>
            )
          }}
        >
          {' '}
          {styles.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          className="input"
          label="Quantity"
          type="text"
          name="quantity"
          onChange={this.handleChange}
          value={this.state.quantity}
        />
        <Button type="submit" variant="contained" color="primary">
          Sell Yo Watch
        </Button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user
})

const mapDispatchToProps = dispatch => ({
  postWatch: formData => dispatch(listWatch(formData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SellWatch);
