import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from '@material-ui/core';
import { UserForm } from './userForm.jsx';

class User extends Component {
  state = {
    open: false,
  };
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { user } = this.props;
    return (
      <div className="row wrap">
        <div id="user-info" className="column wrap border-black">
          <img src={user.image} />
          <p id="user-info-text">User: {user.name}</p>
          <p id="user-info-text">Email: {user.email}</p>
          <p>Address: {user.address}</p>
          <p>Gender: {user.gender}</p>
          <p>Joined On: {user.createdAt.slice(0, 10)}</p>
          <Button onClick={this.handleOpen}>Edit Account Info</Button>
          <Modal
            id="edit-user-info"
            aria-labelledby="simple-modal-title"
            open={this.state.open}
            onClose={this.handleClose}
          >
            {/* <UserForm /> */}
          </Modal>
        </div>
        <div>{}</div>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//     editUser:
// })

const mapStateToProps = state => ({
  user: state.user.user,
});
export default connect(
  mapStateToProps,
  null
)(User);
