import React from 'react';
import { connect } from 'react-redux';
import { CardHeader, Card, Typography, CardContent, Button } from '@material-ui/core';

class WatchSingleView extends React.Component {
  handleBuy = event => {
    event.preventDefault();
    console.log('buy me');
  };

  handleSell = event => {
    event.preventDefault();
    console.log('Sell me');
  };

  render() {
    const watch = this.props.watch;
    if (watch) {
      return (
        <Card className="card pos .card" >
          <CardHeader title={watch.brand} />
          <CardContent>
            <Typography>{watch.model}</Typography>
            <img src={watch.image} />
            <Typography> {watch.price}</Typography>
          </CardContent>
          <Button onClick={this.handleBuy}>Purchase</Button>
        </Card>
      );
    } else {
      return <h1>..Loading</h1>;
    }
  }
}

const mapStateToProps = state => ({
  watch: state.watch.watch
});

export default connect(mapStateToProps)(WatchSingleView);
