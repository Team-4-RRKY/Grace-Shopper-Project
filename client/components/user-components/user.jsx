import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  GridList,
  GridListTile,
  GridListTileBar
} from '@material-ui/core';
import UserForm from './userForm.jsx';
import { editUserData } from '../../store/user';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

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
    });
  };

  handleSubmit = () => {
    this.props.submitEdit(this.state);
  };

  render() {
    const { user } = this.props;
    return (
      <div className="column wrap">
      <div className="row wrap">
        <div>
          <Card >
            <CardMedia
              className="user-media"
              image={user.image}
              title={user.firstName}
            />
            <CardContent className="user-card-content">
              <Typography gutterBottom variant="headline" component="h2">
                {user.firstName + ' ' + user.lastName}
              </Typography>
              <Typography component="p">
                User: {user.firstName} {user.lastName}
              </Typography>
              <Typography component="p">Email: {user.email}</Typography>
              <Typography component="p">Address: {user.address}</Typography>
              <Typography component="p">Gender: {user.gender}</Typography>
              <Typography component="p">
                Joined On: {user.createdAt.slice(0, 10)}
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={this.handleOpen} size="small" color="primary">
                Edit User
              </Button>
            </CardActions>
            <Dialog open={this.state.open} onClose={this.handleClose}>
              <DialogTitle>Edit {user.firstName}'s Account</DialogTitle>
              <DialogContent>
                <UserForm
                  displayName="Submit Edit"
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                />
              </DialogContent>
            </Dialog>
          </Card>
        </div>
      </div>
        <div>
        <h2>{'Watches ' + user.firstName + ' is Selling.'}</h2>
          <GridList cols={4}>
            {user.listings.map(listing => (
              <GridListTile key={listing.id}>
                <Link to={`/watches/${listing.id}`}>
                  <img src={listing.image} />
                  <GridListTileBar
                    title={listing.brand}
                    subtitle={listing.model}
                  />
                </Link>
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user
});

const mapDispatchToProps = dispatch => ({
  submitEdit: editData => {
    dispatch(editUserData(editData));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
