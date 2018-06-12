import React from 'react';
import { connect } from 'react-redux';
import { getWatches, selectedWatch } from '../../store/watch';
import { Link } from 'react-router-dom';
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import FilterWatches from './filterWatches.jsx';

class watchBrowse extends React.Component {
  state = {
    viewedWatches: []
  };

  render() {
    const { isFetching, watches } = this.props;
    console.log('just viewed', this.state.viewedWatches);
    if (isFetching) return <div>Loading....</div>;
    return (
      <div className="content">
        <div>
          <h1 className="secondary-title">All Watches</h1>
        </div>
        <div className="row wrap">
          <FilterWatches />
          {watches.length !== 0 ? (
            <GridList className="grid-list-browse" cols="3">
              {watches.map(watch => (
                <GridListTile
                  key={Math.random()}
                  onClick={() => {
                    this.props.selectWatch(watch);
                    this.state.viewedWatches.push(watch);
                  }}
                >
                  <Link to={`/watches/${watch.id}`}>
                    <img src={watch.image} />
                    <GridListTileBar
                      title={watch.brand}
                      subtitle={watch.model}
                    />
                  </Link>
                </GridListTile>
              ))}
            </GridList>
          ) : (
            <div className="error pos-center">
              {' '}
              There are no Watches with this filter option. Please Reset your
              Filter{' '}
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  watches: state.watch.filteredWatches,
  isFetching: state.watch.isFetching
});

const mapDispatchToProps = dispatch => ({
  getwatches: () => dispatch(getWatches()),
  selectWatch: watch => dispatch(selectedWatch(watch))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(watchBrowse);
