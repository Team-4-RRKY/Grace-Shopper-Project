import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import watchBrowse from './components/watch-components/watchBrowse';
import PropTypes from 'prop-types';
import { Login, Signup, UserHome } from './components';
import User from './components/user-components/user.jsx';
import { me } from './store';
import { getWatches } from './store/watch';
import WatchSingleView from './components/watch-components/WatchSingleView';
import AboutUs from './components/AboutUs';
import Cart from './components/user-components/cart.jsx';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
    this.props.getWatches();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        {/* User Routes */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />

        {/* Watch Routes */}
        <Route exact path="/watches/browse" component={watchBrowse} />
        <Route exact path="/watches/:id" component={WatchSingleView} />

        {/* AboutUs Route */}
        <Route exact path="/aboutus" component={AboutUs} />
        {/* Cart Route */}
        <Route exapct path="/cart" component={Cart} />

        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/home" component={UserHome} />
            <Route exact path="/user" component={User} />
            <Route exapct path="/cart" component={Cart} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route component={Login} />
      </Switch>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.user.id,
    state: state.user.user,
  };
};

const mapDispatch = dispatch => ({
  getWatches: () => dispatch(getWatches()),
  loadInitialData: () => dispatch(me()),
});

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(
  connect(
    mapState,
    mapDispatch
  )(Routes)
);

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
