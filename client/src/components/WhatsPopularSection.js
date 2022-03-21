import React, { useState, useEffect, useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import {
  POPULAR_MOVIES_FAILURE,
  POPULAR_TV_FAILURE,
} from '../constants/mediaContstants';
import { getPopularTV, getPopularMovies } from '../actions/mediaActions';

import { LeftArrow, RightArrow } from '../components/MediaDetails/Arrows';
import stockPhoto from '../assets/stock_photo.png';

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

const WhatsPopularSection = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [items, setItems] = useState(getItems);
  const [selected, setSelected] = useState([]);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const {
    loading: loadingPopularTV,
    success: popularTVSuccess,
    popularTV,
    error: errorPopularTV,
  } = useSelector((state) => state.popularTV);

  const {
    loading: loadingPopularMovies,
    success: popularMoviesSuccess,
    popularMovies,
    error: errorPopularMovies,
  } = useSelector((state) => state.popularMovies);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };

  useEffect(() => {
    if (location.pathname === '/popular/ontv' || location.pathname === '/') {
      dispatch({ type: POPULAR_MOVIES_FAILURE });
      dispatch(getPopularTV());
    }
    if (location.pathname === '/popular/movies') {
      dispatch({ type: POPULAR_TV_FAILURE });
      dispatch(getPopularMovies());
    }
  }, [dispatch, location]);

  return (
    <div className="w-full flex flex-col space-y-2 h-[33rem] mx-auto max-w-8xl px-8 pt-12  sm:py-8 sm:px-10 md:px-20 ">
      {/* Header */}
      <div className="flex space-x-5 items-center pb-4 ">
        <h3 className="text-2xl font-semibold text-secondary">
          What's Popular
        </h3>
        <div
          className="hidden md:inline-flex shadow-sm border-secondary border-1 rounded-full space-x-3"
          role="group"
        >
          <NavLink
            to="/popular/ontv"
            className={({ isActive }) =>
              isActive
                ? 'transition ease-in delay-200 py-1 px-4 text-md font-semibold bg-secondary text-white rounded-full'
                : 'py-1 px-4 text-md font-semibold bg-white text-secondary rounded-full'
            }
          >
            On TV
          </NavLink>
          <NavLink
            to="/popular/movies"
            className={({ isActive }) =>
              isActive
                ? 'transition ease-in delay-200 py-1 px-4 text-md font-semibold bg-secondary text-white rounded-full'
                : 'py-1 px-4 text-md font-semibold bg-white text-secondary rounded-full'
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
      {popularTVSuccess && (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
          {popularTV.results.map((item) => (
            <MovieCard
              itemId={item.id}
              title={item.id}
              key={item.id}
              onClick={handleClick(item.id)}
              selected={isItemSelected(item.id)}
              item={item}
            />
          ))}
        </ScrollMenu>
      )}

      {popularMoviesSuccess && (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
          {popularMovies.results.map((item) => (
            <MovieCard
              itemId={item.id}
              title={item.id}
              key={item.id}
              onClick={handleClick(item.id)}
              selected={isItemSelected(item.id)}
              item={item}
            />
          ))}
        </ScrollMenu>
      )}
    </div>
  );
};

function MovieCard({ onClick, item }) {
  const visibility = useContext(VisibilityContext);
  const location = useLocation();

  return (
    <div
      onClick={() => onClick(visibility)}
      // TODO Implement fade-in transition
      className="flex space-x-2"
      tabIndex={0}
    >
      <Link
        to={
          location.pathname === '/popular/movies'
            ? `/movie/${item.id}`
            : `/tv/${item.id}`
        }
        className="flex flex-col w-44 "
      >
        <div>
          <img
            className="w-40 rounded-lg mx-1"
            src={
              `https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}` ||
              `${stockPhoto}`
            }
            alt="movie cover"
          />
          <div className="rounded-full w-12 h-12 bg-secondary relative left-4 bottom-7 outline outline-offset-0 outline-green-500">
            <p className="text-white font-semibold relative left-2.5 top-3 ">
              {item.vote_average * 10}
              <span className="text-xs font-semibold">%</span>
            </p>
          </div>
        </div>

        <div className="relative bottom-6">
          <p className="font-semibold text-lg px-3">
            {item.title || item.name}
          </p>
          <p className="font-light text-md text-gray-500 px-3">
            {moment(item.first_air_date).format('MMM d, YYYY')}
          </p>
        </div>
      </Link>
    </div>
  );
}

const Dropdown = () => {
  return (
    <>
      <button
        id="dropdownButton1"
        data-dropdown-toggle="dropdown1"
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
        id="dropdown1"
        className="hidden z-10 w-28 text-base list-none bg-white rounded divide-y divide-gray-100 border-1 border-secondary"
      >
        <ul className="py-1" aria-labelledby="dropdownButton1">
          <li>
            <Link
              to="/popular/ontv"
              className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              On TV
            </Link>
          </li>
          <li>
            <Link
              to="/popular/movies"
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

export default WhatsPopularSection;
