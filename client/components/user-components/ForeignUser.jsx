import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  Typography,
  CardMedia,
  CardHeader,
  CardContent,
  Button,
  GridList,
  GridListTile,
  GridListTileBar,
  Dialog
} from '@material-ui/core';
import { connect } from 'react-redux';


class ForeignUser extends Component {
    state = {
        open: false
    }

    handleOpen = () => {
        this.setState({open: true})
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }
  render() {
    const { fUser } = this.props;
    return (
      <Card>
        <CardHeader title="Watch is Being Sold By" />
        <CardMedia id="user-img" image={fUser.image} />
        <CardContent>
          <Typography variant="Title">
            {' '}
            Name: {fUser.firstName} {fUser.lastName}
          </Typography>
          <Typography variant="Title"> Email: {fUser.email}</Typography>
          <Typography variant="Title"> Joined BayWatch on {fUser.createdAt.slice(12)} </Typography>
        </CardContent>
        <Button onClick={this.handleOpen} color="secondary" variant="contained"> Check Out Their Watches </Button>
        <Dialog open={this.state.open} onClose={this.handleClose}>
        <h2 className="text-center">All {fUser.firstName}'s Watches For Sale</h2>
        <GridList cols={4}>
            {fUser.listings.map(listing => (
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
        </Dialog>
      </Card>
    );
  }
}

export default connect(
  null,
  null
)(ForeignUser);
