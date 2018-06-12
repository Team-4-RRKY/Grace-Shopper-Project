import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';

const Navbar = ({ handleClick, isLoggedIn, cart, guestCart }) => (
  <div>
    <h1 id="title">
      <Link to="/home">BayWatch</Link>
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
          <Link className="nav-item" to="/user">
            Account
          </Link>
          <Link className="nav-item" to="/aboutus">
            About Us
          </Link>
          <a className="nav-item" href="#" onClick={handleClick}>
            Logout
          </a>
          <Link className="nav-item" to="/cart">
            Cart{' '}
            {` (${cart.reduce((acc, el) => {
              return acc + el.cart.quantity;
            }, 0)})`}
          </Link>
          <Link className="nav-item" to="/sell"> Sell Watch</Link>
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
            Watches
          </Link>
          <Link className="nav-item" to="/aboutus">
            About Us
          </Link>
          <Link className="nav-item" to="/cart">
            Cart{' '}
            {` (${guestCart.reduce((acc, el) => {
              return acc + el.cart.quantity;
            }, 0)})`}
          </Link>
        </div>
      )}
    </nav>
    <div className="divider" />
  </div>
);

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.user.id,
    cart: state.user.user.cartItems,
    guestCart: state.user.guestCart,
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
