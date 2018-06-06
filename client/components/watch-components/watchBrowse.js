import React from 'react';
import { getWatches } from '../../store/watch';
import { connect } from 'react-redux';
import { SingleWatch } from './singleWatch';

class watchBrowse extends React.Component {
  render() {
    const { isFetching, watches } = this.props;
    console.log(this.props);
    if (isFetching) return <div>Loading....</div>;
    return (
      <div>
        <div>
          <h1>All watches</h1>
        </div>
        <div id="allwatches">
          {watches.map(watch => <SingleWatch watch={watch} key={watch.id} />)}
        </div>
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(watchBrowse);
