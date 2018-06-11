import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import WatchCarousel from './carousel/Carousel.js'


// const watches = [    {
//     image:
//       '//cdn.shopify.com/s/files/1/0377/2037/products/Mens02.Front_280x.jpg?v=1510684692',
//     model: '40 Series - 40MM',
//     price: '$120',
//     quantity: 23,
//     style: '',
//     tier: 'Low-end',
//     gender: 'M',
//     brand: 'Audemars Piguet',
//     sellerId: 1
//   },
//   {
//     image:
//       '//cdn.shopify.com/s/files/1/0377/2037/products/WhiteTanLeather.Front_280x.jpg?v=1510683461',
//     model: 'Classic - 45MM',
//     price: '$95',
//     quantity: 21,
//     style: '',
//     tier: 'Low-end',
//     gender: 'M',
//     brand: 'Audemars Piguet',
//     sellerId: 1
//   },
//   {
//     image:
//       '//cdn.shopify.com/s/files/1/0377/2037/products/BlackGold.Front_7512ebdb-317b-440f-9eb5-52087c3ff3be_280x.jpg?v=1510683201',
//     model: 'Classic - 45MM',
//     price: '$115',
//     quantity: 22,
//     style: '',
//     tier: 'Low-end',
//     gender: 'M',
//     brand: 'Audemars Piguet',
//     sellerId: 1
//   }
// ]


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

// /**
//  * PROP TYPES
//  */
// UserHome.propTypes = {
//   name: PropTypes.string,
//   email: PropTypes.string,
// }
