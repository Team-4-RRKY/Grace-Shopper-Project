import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { auth } from '../store';
import UserForm from './user-components/userForm.jsx';
import { Button, TextField } from '@material-ui/core';


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
    const formName = this.props.name;
    formName === 'signup' ?
    this.props.auth(this.state, formName) :
    this.props.auth({email: evt.target.email.value, password: evt.target.password.value}, formName)
  }
  render() {
    const { name, displayName, error } = this.props;
    return (
      <div>
      {name === 'login' ? (
      <div>
        <h1> Login </h1>
        <form onSubmit={this.handleSubmit} name={name}>
        <div>
          <TextField label="Email" name="email" type="text" />
        </div>
        <div>
          <TextField label="Password" name="password" type="password" />
        </div>
        <div>
        <Button type="submit" variant="contained" color="primary"> {displayName} </Button>
        </div>
        </form>
      </div>
    ) : (
    <div className="signup-form">
    <UserForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} displayName={displayName} />
    </div>
  )
}
  <a href="/auth/google">{displayName} with Google</a>
      </div>
    )
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
    auth: (localState, formName) => dispatch(auth(localState, formName))
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
