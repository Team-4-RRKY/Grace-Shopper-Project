import React from "react";

class SingleWatch extends React.Component {
  render() {
    const watch = this.props.watch;
    return (
      <div id="singlewatch">
        <h1>{watch.name}</h1>
        <h1>{watch.brand}</h1>
        <img src={watch.image} alt="image" />
      </div>
    );
  }
}

export default SingleWatch;
