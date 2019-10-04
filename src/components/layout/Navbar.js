import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ title, icon }) => {
  return (
    <Fragment>
      <nav
        id="main-nav"
        className="navbar navbar-expand-sm navbar-primary bg-light mb-3"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <h3>
              <i className={icon}></i> {title}
            </h3>
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
                exact
                activeclassname="active"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about"
                exact
                classnameactive="active"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
