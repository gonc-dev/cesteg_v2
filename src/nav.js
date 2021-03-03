import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = (props) => {
    return (
    <nav className="nav">
          <ul>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/case-studies">Case Studies</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Contact Us</Link>
            </li>
          </ul>
        </nav>)
}

export default Navbar