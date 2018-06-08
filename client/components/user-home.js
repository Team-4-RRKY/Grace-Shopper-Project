import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { Carousel } from 'react-bootstrap'
// import WatchCarousel from './carousel'


/**
 * COMPONENT
 */
export const UserHome = (props) => {
  const name = props.user.firstName;
  // const lowWatches = props.watches.filter( watch => {
  //   return watch.tier.toLowerCase() === 'low-end'? watch
  // });

// const midWatches
// const highWatches


  return (
    <div>
      <h3>Welcome, {name}</h3>
      <Carousel>
        <Carousel.Item>
          <img width={300} height={500} alt="900x500" src="http://www.pkicon.com/icons/31929/Clock-256.png" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={300} height={500} alt="900x500" src="http://www.pkicon.com/icons/31929/Clock-256.png" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={300} height={500} alt="900x500" src="http://www.pkicon.com/icons/31929/Clock-256.png" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    user: state.user.user,
    watch: state.watch.watches,
  }
}

export default connect(mapState)(UserHome)

// /**
//  * PROP TYPES
//  */
// UserHome.propTypes = {
//   name: PropTypes.string,
//   email: PropTypes.string,
// }
