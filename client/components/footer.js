import React from 'react'
import {Link} from 'react-router-dom'

const Footer = props => (
    <div className="footer">
        <nav className="footer-nav">
            <Link className="nav-links nav-item footer-nav-item" to="/aboutus" > About Us -Baywatch Inc </Link>
        <p> Copyright 2018 Baywatch Inc </p>
        </nav>
    </div>
)

export default Footer
