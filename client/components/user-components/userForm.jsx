import React from 'react';
import {Button, TextField} from '@material-ui/core'

const UserForm = props => (
  <form className="form column" name={props.name} onSubmit={props.handleSubmit}>
    <TextField
      className="input"
      label="First Name"
      type="text"
      name="firstName"
      onChange={props.handleChange}
      value={props.firstName}
    />
    <TextField
      className="input"
      label="Last Name"
      type="text"
      name="lastName"
      onChange={props.handleChange}
      value={props.lastName}
    />
    <TextField
      className="input"
      label="Address"
      type="text"
      name="address"
      onChange={props.handleChange}
      value={props.address}
    />
    <TextField
      className="input"
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
      label="Avatar"
      type="text"
      name="image"
      onChange={props.handleChange}
      value={props.image}
    />
    <TextField
      className="input"
      label="Gender"
      type="text"
      name="gender"
      onChange={props.handleChange}
      value={props.gender}
    />
    <Button type="submit" variant="contained" color="primary"> {props.displayName} </Button>
  </form>
);

export default UserForm;
