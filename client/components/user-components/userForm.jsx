import React from 'react';
import {Button, TextField} from '@material-ui/core'
import {connect} from 'react-redux'

const UserForm = props => (
  <form className="form column" name={props.name} onSubmit={props.handleSubmit}>
    <TextField
      className="input"
      label="First Name"
      defaultValue={props.user.firstName}
      type="text"
      name="firstName"
      onChange={props.handleChange}
      value={props.firstName}
    />
    <TextField
      className="input"
      label="Last Name"
      defaultValue={props.user.lastName}
      type="text"
      name="lastName"
      onChange={props.handleChange}
      value={props.lastName}
    />
    <TextField
      className="input"
      defaultValue={props.user.address}
      label="Address"
      type="text"
      name="address"
      onChange={props.handleChange}
      value={props.address}
    />
    <TextField
      className="input"
      defaultValue={props.user.email}
      label="Email"
      type="text"
      name="email"
      onChange={props.handleChange}
      value={props.email}
    />
    <TextField
      className="input"
      label="Password"
      type="text"
      name="password"
      onChange={props.handleChange}
      value={props.password}
    />
    <TextField
      className="input"
      defaultValue={props.user.image}
      label="Avatar"
      type="text"
      name="image"
      onChange={props.handleChange}
      value={props.image}
    />
    <TextField
      className="input"
      defaultValue={props.user.gender}
      label="Gender"
      type="text"
      name="gender"
      onChange={props.handleChange}
      value={props.gender}
    />
    <Button type="submit" variant="contained" color="primary"> {props.displayName} </Button>
  </form>
);

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, null)(UserForm);
