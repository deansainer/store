import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className={classes.nav_item} to={'/'}>Apple Store</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      <Link className={classes.nav_item} to={'/cart'}>Cart</Link>
      </li>
    </ul>
  </div>
</nav>
  )
}

export default Navbar