import React, {Component} from 'react'
import {connect} from 'react-redux'

class User extends Component {
    render() {
        const {user} = this.props
        return (
            <div>
            <img src={user.image} />
            <p>User: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Address: {user.address}</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
})
export default connect(mapStateToProps, null)(User)
