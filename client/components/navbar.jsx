import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import { Menu, Button, MenuItem } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

class Navbar extends Component {
  state = {
    anchorEl: null,
    open: false,
  };

  handleOpen = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ open: false, anchorEl: null });
  };

  render() {
    let { handleClick, isLoggedIn, cart, guestCart, user } = this.props;
    if (!cart) {
      cart = [];
    }
    return (
      <div>
        <h1 id="title">
          <Link to="/home"> BayWatch</Link>
        </h1>
        <nav>
          {isLoggedIn ? (
            <div className="nav-container">
              {/* The navbar will show these links after you log in */}
              <Link className="nav-item" to="/home">
                Home
              </Link>
              <Link className="nav-item" to="/watches/browse">
                Watches
              </Link>
              <Button onClick={this.handleOpen}>
                <div className="nav-item">
                  {user.firstName + ' ' + user.lastName}
                </div>
              </Button>
              <Menu
                anchorEl={this.state.anchorEl}
                open={this.state.open}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>
                  <Link className="nav-item" to="/user">
                    {user.firstName + "'s" + ' Account'}
                  </Link>
                </MenuItem>
                <MenuItem onClick={this.handleClose}>
                  <Link className="nav-item" to="/sell">
                    Sell Watch
                  </Link>
                </MenuItem>
                <MenuItem href="#" onClick={handleClick}>
                  <div className="nav-item"> Logout</div>
                </MenuItem>
              </Menu>
              <IconButton>
                <Link className="nav-item" to="/cart">
                  <AddShoppingCartIcon />
                </Link>
                {` (${cart.reduce((acc, el) => {
                  return acc + el.cart.quantity;
                }, 0)})`}
              </IconButton>
              <Link className="nav-item" to="/aboutus">
                About Us
              </Link>
            </div>
          ) : (
            <div className="nav-container">
              {/* The navbar will show these links before you log in */}
              <Link className="nav-item" to="/login">
                Login
              </Link>
              <Link className="nav-item" to="/signup">
                Sign Up
              </Link>
              <Link className="nav-item" to="/watches/browse">
                WATCHES
              </Link>

              <IconButton color="primary">
                <Link className="nav-item" to="/cart">
                  <AddShoppingCartIcon />
                  {` (${guestCart.reduce((acc, el) => {
                    return acc + el.cart.quantity;
                  }, 0)})`}
                </Link>
              </IconButton>
            </div>
          )}
        </nav>
        <div className="divider" />
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.user.id,
    cart: state.user.user.cartItems,
    guestCart: state.user.guestCart,
    user: state.user.user,
  };
};

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(
  mapState,
  mapDispatch
)(Navbar);

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
