import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import movipax_logo from '../assets/movipax_logo.png';

const Header = () => {
  return (
    // Header Container
    <div className="">
      {/*  Full size container */}
      <div className="hidden sm:flex px-4 py-4 sm:px-8 bg-secondary shadow-md justify-between">
        {/* Logo and Nav Links */}
        <div className="flex space-x-4">
          <Link to="/">
            {' '}
            <img className="w-32" src={movipax_logo} alt="MOVIEPAX logo" />
          </Link>

          <NavLink to="/" className="font-medium text-white pr-4 pt-1">
            Movies
          </NavLink>
          <NavLink to="/" className="font-medium text-white pt-1">
            TV Shows
          </NavLink>
        </div>

        {/* Search and Profile Container */}
        <div className="flex space-x-6 pt-2">
          <FontAwesomeIcon icon={faUser} className="text-white fa-lg" />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-primary opacity-90 fa-lg"
          />
        </div>
      </div>

      {/* Mobile container */}
      <div className="sm:hidden px-4 py-4 sm:px-8 bg-secondary shadow-md flex  items-center justify-between">
        <FontAwesomeIcon icon={faBars} className="text-white fa-md" />

        <img className="w-32" src={movipax_logo} alt="MOVIEPAX logo" />

        <div className="flex space-x-6 pt-2">
          <FontAwesomeIcon icon={faUser} className="text-white fa-md" />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-primary opacity-90 fa-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
