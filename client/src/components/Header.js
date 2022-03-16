import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import movipax_logo from '../assets/movipax_logo.png';

const Header = () => {
  return (
    <nav className="bg-secondary px-4 py-4 ">
      <div className="container flex sm:flex-row justify-between sm:justify-between sm:space-x-2 items-center sm:px-8 max-w-8xl mx-auto">
        <div className="flex flex-col mt-1 md:flex-row space-x-2 items-center">
          <Link to="/">
            {' '}
            <img className="w-32" src={movipax_logo} alt="MOVIEPAX logo" />
          </Link>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="absolute right-5 sm:inline-flex p-2 ml-3 text-sm text-white md:hidden"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto " id="mobile-menu">
            <ul className="flex flex-col pt-1 md:flex-row md:space-x-2 md:mt-0 md:text-md font-medium">
              <li>
                <a
                  href="/"
                  className="block py-2 pr-4 pl-3 text-white "
                  aria-current="page"
                >
                  Movies
                </a>
              </li>
              <li>
                <a href="/" className="block py-2 pr-4 pl-3 text-white  ">
                  TV Shows
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="search text-white hidden md:inline-flex pt-2">
          <div className="flex space-x-6 pt-2">
            <FontAwesomeIcon icon={faUser} className="text-white fa-md" />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-primary opacity-90 fa-md"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
