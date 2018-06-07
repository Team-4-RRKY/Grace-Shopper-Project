import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class SingleWatch extends React.Component {
  render() {
    console.log(this.props);
    /* const id = Number(this.props.match.params.id); */
    const watch = this.props.watch;
    return (
      <div>
        <Link to={`/watches/${watch.id}`}>
          <h1>{watch.brand}</h1>
        </Link>
        <h1>{watch.model}</h1>
        <img src={watch.image} alt="image" />
      </div>
    );
  }
}
/*
const mapStateToProps = state => ({
  watches: state.watch.watches
});

export default connect(mapStateToProps)(SingleWatch);
 */
export default SingleWatch;
