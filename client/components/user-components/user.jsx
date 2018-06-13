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
  GridListTileBar,
  List,
  ListItemText,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
  , ListItem
} from '@material-ui/core';
import UserForm from './userForm.jsx';
import { editUserData } from '../../store/user';


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
    console.log(user.saleItems)
    return (
      <div className="column wrap">
      <div className="row wrap">
        <div>
          <Card >
            <div className="row wrap">
            <CardMedia
              id="user-img"
              image={user.image}
              title={user.firstName}
            />
            <CardContent className="user-card-content">
              <Typography gutterBottom variant="headline" component="h1">
                {user.firstName + ' ' + user.lastName}
              </Typography>
              <Typography variant="title">
                User: {user.firstName} {user.lastName}
              </Typography>
              <Typography variant="title">Email: {user.email}</Typography>
              <Typography variant="title">Address: {user.address}</Typography>
              <Typography variant="title">Gender: {user.gender}</Typography>
              <Typography variant="title">
                Joined On: {user.createdAt.slice(0, 10)}
              </Typography>
            </CardContent>
            <CardActions>
              <Button color="secondary" variant="contained" onClick={this.handleOpen} size="small" color="primary">
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
            </div>
          </Card>
        </div>
        <div className="column wrap">
        <h3 className="text-center"> Purchase History </h3>
        <List>
          {user.saleItems.map(purchasedItem => (
          <ListItem key={purchasedItem.id}>
            <ListItemText primary={purchasedItem.brand} />
          </ListItem>
          ))}
        </List>
        </div>
        <div />
      </div>
        <div>
        <h2>{'Watches ' + user.firstName + ' is Selling.'}</h2>
          <GridList cols={4}>
            {user.listings.map(listing => (
              <GridListTile key={listing.id}>
                <Link to={`/watches/${listing.id}`}>
                  <img src={listing.image} id="watch-img" />
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
