import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import {
  TRENDING_TODAY_FAILURE,
  TRENDING_THIS_WEEK_FAILURE,
} from '../constants/mediaContstants';
import { getTrendingToday, getTrendingThisWeek } from '../actions/mediaActions';

import { LeftArrow, RightArrow } from '../components/MediaDetails/Arrows';
import stock_photo from '../assets/stock_photo.png';

const TrendingSection = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [selected, setSelected] = useState([]);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const {
    loading: loadingTrendingToday,
    success: trendingTodaySuccess,
    trendingToday,
    error,
  } = useSelector((state) => state.trendingToday);

  const {
    loading: loadingTrendingThisWeek,
    success: trendingThisWeekSuccess,
    trendingThisWeek,
    error: errorTrendingThisWeek,
  } = useSelector((state) => state.trendingThisWeek);

  const handleClick = (id) => () => {
    const itemSelected = isItemSelected(id);

    setSelected((currentSelected) =>
      itemSelected
        ? currentSelected.filter((el) => el !== id)
        : currentSelected.concat(id)
    );
  };

  useEffect(() => {
    if (location.pathname === '/trending/thisweek') {
      dispatch({ type: TRENDING_TODAY_FAILURE });
      dispatch(getTrendingThisWeek());
    }
    if (location.pathname === '/') {
      dispatch({ type: TRENDING_THIS_WEEK_FAILURE });
      dispatch(getTrendingToday());
    }
  }, [dispatch, location]);

  return (
    <div className="flex flex-col space-y-2 h-[30rem] mx-auto max-w-8xl px-8 pt-12  sm:py-8 sm:px-10 md:px-20 ">
      {/* Header */}
      <div className="flex space-x-5 items-center pb-4">
        <h3 className="text-2xl font-semibold text-secondary">Trending</h3>

        <div
          className="hidden md:inline-flex shadow-sm border-secondary border-1 rounded-full space-x-3"
          role="group"
        >
          <NavLink
            to="/"
            // className={(state) => console.log(state)}
            className={({ isActive }) =>
              isActive
                ? 'transition ease-in delay-200 py-1 px-4 text-md font-semibold bg-secondary text-white rounded-full'
                : 'py-1 px-4 text-md font-semibold bg-white text-secondary rounded-full'
            }
          >
            Today
          </NavLink>
          <NavLink
            to="/trending/thisweek"
            // className={(state) => console.log(state)}
            className={({ isActive }) =>
              isActive
                ? 'transition ease-in delay-200 py-1 px-4 text-md font-semibold bg-secondary text-white rounded-full'
                : 'py-1 px-4 text-md font-semibold bg-white text-secondary rounded-full'
            }
          >
            This Week
          </NavLink>
        </div>
        <div className="md:hidden">
          <Dropdown />
        </div>
      </div>

      {/* Content */}

      {trendingTodaySuccess && (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
          {/* Map over Treding and display MovieCards */}
          {trendingToday.results.map((item) => (
            <MovieCard
              itemId={item.id} // NOTE: itemId is required for track items
              title={item.id}
              key={item.id}
              onClick={handleClick(item.id)}
              selected={isItemSelected(item.id)}
              item={item}
            />
          ))}
        </ScrollMenu>
      )}

      {trendingThisWeekSuccess && (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
          {/* Map over Treding and display MovieCards */}
          {trendingThisWeek.results.map((item) => (
            <MovieCard
              itemId={item.id} // NOTE: itemId is required for track items
              title={item.id}
              key={item.id}
              onClick={handleClick(item.id)}
              selected={isItemSelected(item.id)}
              item={item}
            />
          ))}
        </ScrollMenu>
      )}

      <div className="scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 h-32 overflow-y-scroll"></div>
    </div>
    // </div>
  );
};

const MovieCard = ({ onClick, item }) => {
  const visibility = React.useContext(VisibilityContext);

  return (
    <div
      onClick={() => onClick(visibility)}
      // Implement fade-in transition
      className="flex space-x-2 animate-fade-in"
      tabIndex={0}
    >
      <Link
        to={item.media_type === 'tv' ? `/tv/${item.id}` : `/movie/${item.id}`}
        className="flex flex-col w-44 "
      >
        <div>
          {item.poster_path ? (
            <img
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.poster_path}`}
              alt="movie poster"
              className="w-40 rounded-lg mx-1"
            />
          ) : (
            <img
              src={stock_photo}
              alt="movie poster"
              className="w-40 rounded-lg mx-1"
            />
          )}
          <div className="rounded-full w-12 h-12 bg-secondary relative left-4 bottom-7">
            <p className="text-white font-semibold relative left-2.5 top-3">
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
            {moment(item.release_date).format('MMM d, YYYY')}
          </p>
        </div>
      </Link>
    </div>
  );
};

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
              to="/"
              className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Today
            </Link>
          </li>
          <li>
            <Link
              to="/trending/thisweek"
              className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              This Week
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TrendingSection;
