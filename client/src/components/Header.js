import React from 'react';
import { Link } from 'react-router-dom';

import movipax_logo from '../assets/movipax_logo.png';

const Header = () => {
  return (
    <nav className="bg-secondary px-4 py-5 ">
      <div className="container flex justify-center sm:flex-row items-center sm:px-8 max-w-8xl mx-auto">
        <Link to="/">
          {' '}
          <img className="w-32" src={movipax_logo} alt="MOVIEPAX logo" />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
