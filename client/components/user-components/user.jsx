import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import { Button, Dialog, DialogTitle, DialogContent, GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import UserForm  from './userForm.jsx'
import {editUserData} from '../../store/user'

class User extends Component {
  state = {
    open: false,
    firstName: this.props.user.firstName,
    lastName: this.props.user.lastName,
    address: this.props.user.address,
    image: this.props.user.image,
    gender: this.props.user.gender,
    id: this.props.user.id
  };
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.submitEdit(this.state)
  }

  render() {
    const { user } = this.props;
    return (
      <div className="row wrap">
        <div id="user-info" className="column wrap border-black">
          <img src={user.image} className="user-img" />
          <p id="user-info-text">User: {user.firstName} {user.lastName}</p>
          <p id="user-info-text">Email: {user.email}</p>
          <p>Address: {user.address}</p>
          <p>Gender: {user.gender}</p>
          <p>Joined On: {user.createdAt.slice(0, 10)}</p>
          <Button onClick={this.handleOpen}>Edit Account Info</Button>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
           >
           <DialogTitle>Edit {user.firstName}'s Account</DialogTitle>
           <DialogContent>
             <UserForm displayName="Submit Edit" handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
           </DialogContent>
          </Dialog>
        </div>
        <GridList>
          {user.listings.map(listing => (
            <GridListTile key={listing.id}>
              <Link to = {`/watches/${listing.id}`}>
                <img src={listing.image} />
                <GridListTileBar title={listing.brand} subtitle={listing.model} />
              </Link>
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
});

const mapDispatchToProps = dispatch => ({
  submitEdit: editData => {
    dispatch(editUserData(editData))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
