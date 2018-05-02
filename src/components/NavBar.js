import React from 'react';
import { Link } from 'react-router-dom'

import './../styles/navbar.scss'
const webpackLogo = require('./../images/webpack.png')

const NavBar = () => (
  <header className='header'>
    <div className="logo-container">
      <Link to='/'><img src={webpackLogo} className="logo__text" /></Link>
    </div>
    <nav className='nav'>
      <ul>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/lectures'>Lectures</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default NavBar;