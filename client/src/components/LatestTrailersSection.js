import React, { useEffect, useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { useDispatch, useSelector } from 'react-redux';
// import ModalVideo from 'react-modal-video';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import { LeftArrow, RightArrow } from '../components/MediaDetails/Arrows';
import TrailerCard from './TrailerCard';

import { getTVTrailers } from '../actions/trailerActions';

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

const LatestTrailersSection = () => {
  const dispatch = useDispatch();
  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);

  const {
    loading: loadingTrailerOne,
    success: successTrailerOne,
    trailerOne,
    error: errorTrailerOne,
  } = useSelector((state) => state.tvTrailerOne);

  const isItemSelected = (id) => !!selected.find((el) => el === id);
  const handleClick = (id) => () => {
    const itemSelected = isItemSelected(id);

    setSelected((currentSelected) =>
      itemSelected
        ? currentSelected.filter((el) => el !== id)
        : currentSelected.concat(id)
    );
  };

  // console.log(trailerOne);

  useEffect(() => {
    dispatch(getTVTrailers());
  }, [dispatch]);

  return (
    <div
      className="flex flex-col space-y-2 h-[26rem] bg-cover mx-auto max-w-8xl px-8 pt-12  sm:py-8 sm:px-10 md:px-20"
      style={{
        backgroundImage: `linear-gradient(100deg, rgba(43, 37, 37, 0.92) 38%, rgba(250, 202, 12, 0.9)), url(https://film-book.com/wp-content/uploads/2021/02/euphoria-logo-01-700x400-1.jpg)`,
      }}
    >
      {/* Header */}
      <div className="flex space-x-5 items-center pb-4">
        <h3 className="text-2xl font-semibold text-white">Latest Trailers</h3>
        <div
          className="hidden md:inline-flex shadow-sm border-primary border-1 rounded-full space-x-3"
          role="group"
        >
          <NavLink
            to="/"
            // className={(state) => console.log(state)}
            className={({ isActive }) =>
              isActive
                ? 'transition ease-in delay-200 py-1 px-4 text-md font-semibold bg-primary text-secondary rounded-full'
                : 'py-1 px-4 text-md font-semibold bg-none text-primary rounded-full'
            }
          >
            On TV
          </NavLink>
          <NavLink
            to="/trailers/ontv"
            // className={(state) => console.log(state)}
            className={({ isActive }) =>
              isActive
                ? 'transition ease-in delay-200 py-1 px-4 text-md font-semibold bg-primary text-secondary rounded-full'
                : 'py-1 px-4 text-md font-semibold bg-none text-primary rounded-full'
            }
          >
            Movies
          </NavLink>
        </div>
        <div className="md:hidden">
          <Dropdown />
        </div>
      </div>
      {/* Content */}
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {successTrailerOne && (
          <Card
            itemId={trailerOne.results[0].id} // NOTE: itemId is required for track items
            title={trailerOne.results[0].id}
            key={trailerOne.results[0].id}
            onClick={handleClick(trailerOne.results[0].id)}
            selected={isItemSelected(trailerOne.results[0].id)}
            trailer={trailerOne.results[0]}
          />
        )}
        {/* {successTrailerOne && (
          <Card
            itemId={trailerOne.results[0].id} // NOTE: itemId is required for track items
            title={trailerOne.results[0].id}
            key={trailerOne.results[0].id}
            onClick={handleClick(trailerOne.results[0].id)}
            selected={isItemSelected(trailerOne.results[0].id)}
            trailer={trailerOne.results[0]}
          />
        )} */}
      </ScrollMenu>
    </div>
  );
};

function Card({ onClick, trailer }) {
  const visibility = useContext(VisibilityContext);

  return (
    <>
      <div
        onClick={() => onClick(visibility)}
        className="pr-5 w-96 pb-5"
        tabIndex={0}
      >
        <div className="flex flex-col items-center">
          <div className="relative">
            <img
              className="w-96 rounded-lg "
              src={`https://img.youtube.com/vi/${trailer.key}/maxresdefault.jpg`}
              alt="trailer cover"
            />
            {/* <button
              type="button"
              data-modal-toggle="authentication-modal"
              onClick={console.log('Click!')}
              className="absolute top-16 left-36 w-16 h-16 rounded-full focus:outline-none"
            >
              <FontAwesomeIcon icon={faPlay} className="text-white fa-2xl" />
            </button> */}
            <button
              type="button"
              data-modal-toggle="authentication-modal"
              onClick={console.log('Click!')}
              className="text-white"
            >
              Button
            </button>
          </div>

          <div
            id="authentication-modal"
            tabIndex="-1"
            aria-hidden="true"
            className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 my-[14rem]"
          >
            <div className="relative p-1 w-full max-w-3xl h-full md:h-auto mx-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex justify-end p-2 bg-gray-900">
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent  hover:text-gray-200 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    data-modal-toggle="authentication-modal"
                  >
                    <svg
                      className="w-5 h-5"
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
                </div>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    title="Test Title"
                    src="https://www.youtube.com/embed/r9jwGansp1E"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          <p className="font-semibold text-lg px-3 text-white pt-3 text-center">
            {trailer.name}
          </p>
          <p className="font-light text-md px-3 text-white">{trailer.type}</p>
        </div>
      </div>
    </>
  );
}

const Dropdown = () => {
  return (
    <>
      <button
        id="dropdownButton"
        data-dropdown-toggle="dropdown"
        className="text-white font-semibold bg-secondary text-md focus:ring-3 focus:ring-blue-300 rounded-full px-5 py-1 text-center inline-flex items-center"
        type="button"
      >
        Format{' '}
        <svg
          className="ml-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      <div
        id="dropdown"
        className="hidden z-10 w-28 text-base list-none bg-white rounded divide-y divide-gray-100 border-1 border-secondary"
      >
        <ul className="py-1" aria-labelledby="dropdownButton1">
          <li>
            <a
              href="/"
              className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              On TV
            </a>
          </li>
          <li>
            <Link
              to="/"
              className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Movies
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LatestTrailersSection;
