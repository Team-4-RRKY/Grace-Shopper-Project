import React from 'react';
import { connect } from 'react-redux';
import { getWatches, selectedWatch } from '../../store/watch';
import { Link } from 'react-router-dom';
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';

class watchBrowse extends React.Component {
  render() {
    const { isFetching, watches } = this.props;
    if (isFetching) return <div>Loading....</div>;
    return (
      <div>
        <div>
          <h1>All Watches</h1>
        </div>
        <GridList>
          {watches.map(watch => (
            <GridListTile
              key={watch.id}
              cellheight="100"
              onClick={() => this.props.selectWatch(watch)}
            >
              <Link to={`/watches/${watch.id}`}>
                <img src={watch.image} />
                <GridListTileBar title={watch.brand} subtitle={watch.model} />
              </Link>
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  watches: state.watch.watches,
  isFetching: state.watch.isFetching,
});

const mapDispatchToProps = dispatch => ({
  getwatches: () => dispatch(getWatches()),
  selectWatch: watch => dispatch(selectedWatch(watch)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(watchBrowse);
