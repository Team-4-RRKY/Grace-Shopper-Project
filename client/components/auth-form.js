import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { auth } from '../store';
import UserForm from './user-components/userForm.jsx';

/**
 * COMPONENT
 */
class AuthForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      image: '',
      gender: '',
      password: ''
    };
  }

  handleChange = event => {
    console.log(this.state)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const formName = 'signup';
    // const email = evt.target.email.value;
    // const password = evt.target.password.value;
    this.props.auth(this.state, formName);
  }
  render() {
    const { name, displayName, handleSubmit, error } = this.props;

    return (
      <div>

        {/* <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="email"><small>Email</small></label>
          <input name="email" type="text" />
        </div>
        <div>
          <label htmlFor="password"><small>Password</small></label>
          <input name="password" type="password" />
        </div>
        <div>
          <button type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form> */}
        <UserForm handleSubmit={this.handleSubmit} name={name} handleChange={this.handleChange} />
        <a href="/auth/google">{displayName} with Google</a>
      </div>
    );
  }
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  };
};

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  };
};

const mapDispatch = dispatch => {
  return {
    auth: (formName, localState) => dispatch(auth(localState, formName))
  //   handleSubmit(evt) {
  //     evt.preventDefault();
  //     const formName = evt.target.name;
  //     // const email = evt.target.email.value;
  //     // const password = evt.target.password.value;
  //     const email = this.state.email;
  //     const password = this.state.password;
  //     dispatch(auth(email, password, formName));
  //   }
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  error: PropTypes.object
};
