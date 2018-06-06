import React from 'react';

class SingleWatch extends React.Component {
  render() {
    const watch = this.props.watch;
    return (
      <div id="singlewatch">
        <h1>{watch.brand}</h1>
        <h1>{watch.model}</h1>
        <img src={watch.image} alt="image" />
      </div>
    );
  }
}

export default SingleWatch;
