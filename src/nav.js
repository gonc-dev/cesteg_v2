import React from 'react'
import {Link} from 'react-router-dom'
import {useState} from 'react'

const Navbar = (props) => {
    const [navActive, setNavActive] = useState(false)
    console.log(window.screen.width)
    
    return (
    <React.Fragment>
    <div className="mobile-nav">
      <div>
              <Link to="/"><img src="/images/logo-transparent.png" width="80"/></Link>
      </div>
      <div onClick={() => {
        setNavActive(!navActive)
      }}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
    </div>
    <nav className={navActive ? "nav active bg-light" : "nav"}>
          <ul onClick={() => setNavActive(false)}>
          <li>
              <Link to="/"><img src="/images/logo-transparent.png" width="80"/></Link>
            </li>
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
              <Link to="/partners">Our Partners</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </nav>
    </React.Fragment>
  )
}

export default Navbar