import React from 'react'
import { connect } from 'react-redux';
import WatchCarousel from './carousel/Carousel.js'

/**
 * COMPONENT
 */
export const UserHome = (props) => {
  const name = props.user.firstName;

  return (
    <div>
      <h3 className="user-home-header">Welcome, {name}</h3>
      <WatchCarousel watches={props.watches} />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    user: state.user.user,
    watches: state.watch.watches,
  }
}

export default connect(mapState)(UserHome)
