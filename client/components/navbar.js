import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import {Menu, MenuItem} from '@material-ui/core'

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    <h1 id="title">BayWatch</h1>
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link className="nav-item" to="/home">Home</Link>
          <Link className="nav-item" to="/watches/browse">Watches</Link>
          <Link className="nav-item" to="/user">Account</Link>
          <Link className="nav-item" to="/aboutus">About Us</Link>
          <a className="nav-item" href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link className="nav-item" to="/login">Login</Link>
          <Link className="nav-item" to="/signup">Sign Up</Link>
          <Link  className="nav-item" to="/watches/browse">WATCHES</Link>
          <Link className="nav-item" to="/aboutus">About Us</Link>
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
    isLoggedIn: !!state.user.id
  };
};

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout());
    }
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
  isLoggedIn: PropTypes.bool.isRequired
};
