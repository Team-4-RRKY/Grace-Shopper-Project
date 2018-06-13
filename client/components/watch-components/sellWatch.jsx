import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  TextField,
  InputAdornment,
  MenuItem,
  Input,
} from '@material-ui/core';
import { listWatch } from '../../store/watch';
import { ranges, styles } from '../../components/commonUtils';

class SellWatch extends Component {
  state = {
    model: '',
    brand: '',
    price: '',
    image: 'http://www.pkicon.com/icons/31929/Clock-256.png',
    gender: '',
    style: '',
    quantity: '',
    description: '',
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.postWatch(this.state, this.props.id);
  };

  render() {
    return (
      <form
        id="sell-watch"
        onSubmit={this.handleSubmit}
        className="form column"
      >
        <TextField
          className="input"
          label="Brand"
          type="text"
          name="brand"
          onChange={this.handleChange}
          value={this.state.brand}
          required
        />
        <TextField
          className="input"
          label="Model"
          type="text"
          name="model"
          onChange={this.handleChange}
          value={this.state.model}
          required
        />
        <TextField
          className="input"
          label="Price"
          type="text"
          name="price"
          onChange={this.handleChange}
          value={this.state.price}
          inputProps={{
            startadornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          required
        />
        <TextField
          className="input"
          label="Image of Product"
          type="text"
          name="image"
          onChange={this.handleChange}
          value={this.state.image}
          defaultValue="http://www.pkicon.com/icons/31929/Clock-256.png"
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
            startadornment: (
              <InputAdornment position="start">Gender</InputAdornment>
            ),
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
            startadornment: (
              <InputAdornment position="start">Style</InputAdornment>
            ),
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
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Sell Yo Watch
        </Button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  id: state.user.user.id,
});
const mapDispatchToProps = dispatch => ({
  postWatch: (formData, id) => dispatch(listWatch(formData, id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SellWatch);
