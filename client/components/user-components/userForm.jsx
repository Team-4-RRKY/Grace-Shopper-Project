import React from 'react';

const UserForm = props => (
  <form className="form column" name={props.name} onSubmit={props.handleSubmit}>
    First Name:{' '}
    <input
      className="input"
      type="text"
      name="firstName"
      onChange={props.handleChange}
      value={props.firstName}
    />
    Last Name:{' '}
    <input
      className="input"
      type="text"
      name="lastName"
      onChange={props.handleChange}
      value={props.lastName}
    />
    Address:{' '}
    <input
      className="input"
      type="text"
      name="address"
      onChange={props.handleChange}
      value={props.address}
    />
    Email:{' '}
    <input
      className="input"
      type="text"
      name="email"
      onChange={props.handleChange}
      value={props.email}
    />
    Password:{' '}
    <input
      className="input"
      type="text"
      name="password"
      onChange={props.handleChange}
      value={props.password}
    />
    Avatar:{' '}
    <input
      className="input"
      type="text"
      name="image"
      onChange={props.handleChange}
      value={props.image}
    />
    Gender:{' '}
    <input
      className="input"
      type="text"
      name="gender"
      onChange={props.handleChange}
      value={props.gender}
    />
    <button id="submit" type="submit" value="submit">
      {' '}
      Submit{' '}
    </button>
  </form>
);

export default UserForm;
