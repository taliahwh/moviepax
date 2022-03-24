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
  const [selected, setSelected] = React.useState([]);

  const {
    loading: loadingTrailerOne,
    success: successTrailerOne,
    trailerOne,
    error: errorTrailerOne,
  } = useSelector((state) => state.tvTrailerOne);

  const {
    loading: loadingTrailerTwo,
    success: successTrailerTwo,
    trailerTwo,
    error: errorTrailerTwo,
  } = useSelector((state) => state.tvTrailerTwo);

  const {
    loading: loadingTrailerThree,
    success: successTrailerThree,
    trailerThree,
    error: errorTrailerThree,
  } = useSelector((state) => state.tvTrailerThree);

  const {
    loading: loadingTrailerFour,
    success: successTrailerFour,
    trailerFour,
    error: errorTrailerFour,
  } = useSelector((state) => state.tvTrailerFour);

  const {
    loading: loadingTrailerFive,
    success: successTrailerFive,
    trailerFive,
    error: errorTrailerFive,
  } = useSelector((state) => state.tvTrailerFive);

  const {
    loading: loadingTrailerSix,
    success: successTrailerSix,
    trailerSix,
    error: errorTrailerSix,
  } = useSelector((state) => state.tvTrailerSix);

  const {
    loading: loadingTrailerSeven,
    success: successTrailerSeven,
    trailerSeven,
    error: errorTrailerSeven,
  } = useSelector((state) => state.tvTrailerSeven);

  const {
    loading: loadingTrailerEight,
    success: successTrailerEight,
    trailerEight,
    error: errorTrailerEight,
  } = useSelector((state) => state.tvTrailerEight);

  const {
    loading: loadingTrailerNine,
    success: successTrailerNine,
    trailerNine,
    error: errorTrailerNine,
  } = useSelector((state) => state.tvTrailerNine);

  const isItemSelected = (id) => !!selected.find((el) => el === id);
  const handleClick = (id) => () => {
    const itemSelected = isItemSelected(id);

    setSelected((currentSelected) =>
      itemSelected
        ? currentSelected.filter((el) => el !== id)
        : currentSelected.concat(id)
    );
  };

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
        {successTrailerOne && trailerOne.results.length !== 0 && (
          <Card
            itemId={
              trailerOne.results.findIndex((el) => el.official === true) !== -1
                ? trailerOne.results[
                    trailerOne.results.findIndex((el) => el.official === true)
                  ].id
                : trailerOne.results[0].id
            } // NOTE: itemId is required for track items
            key={
              trailerOne.results.findIndex((el) => el.official === true) !== -1
                ? trailerOne.results[
                    trailerOne.results.findIndex((el) => el.official === true)
                  ].id
                : trailerOne.results[0].id
            }
            onClick={handleClick(
              trailerOne.results.findIndex((el) => el.official === true) !== -1
                ? trailerOne.results[
                    trailerOne.results.findIndex((el) => el.official === true)
                  ].id
                : trailerOne.results[0].id
            )}
            selected={isItemSelected(
              trailerOne.results.findIndex((el) => el.official === true) !== -1
                ? trailerOne.results[
                    trailerOne.results.findIndex((el) => el.official === true)
                  ].id
                : trailerOne.results[0].id
            )}
            trailer={
              trailerOne.results.findIndex((el) => el.official === true) !== -1
                ? trailerOne.results[
                    trailerOne.results.findIndex((el) => el.official === true)
                  ]
                : trailerOne.results[0]
            }
            title={trailerOne.title}
          />
        )}
        {successTrailerTwo && trailerTwo.results.length !== 0 && (
          <Card
            itemId={
              trailerTwo.results.findIndex((el) => el.official === true) !== -1
                ? trailerTwo.results[
                    trailerTwo.results.findIndex((el) => el.official === true)
                  ].id
                : trailerTwo.results[0].id
            } // NOTE: itemId is required for track items
            key={
              trailerTwo.results.findIndex((el) => el.official === true) !== -1
                ? trailerTwo.results[
                    trailerTwo.results.findIndex((el) => el.official === true)
                  ].id
                : trailerTwo.results[0].id
            }
            onClick={handleClick(
              trailerTwo.results.findIndex((el) => el.official === true) !== -1
                ? trailerTwo.results[
                    trailerTwo.results.findIndex((el) => el.official === true)
                  ].id
                : trailerTwo.results[0].id
            )}
            selected={isItemSelected(
              trailerTwo.results.findIndex((el) => el.official === true) !== -1
                ? trailerTwo.results[
                    trailerTwo.results.findIndex((el) => el.official === true)
                  ].id
                : trailerTwo.results[0].id
            )}
            trailer={
              trailerTwo.results.findIndex((el) => el.official === true) !== -1
                ? trailerTwo.results[
                    trailerTwo.results.findIndex((el) => el.official === true)
                  ]
                : trailerTwo.results[0]
            }
            title={trailerTwo.title}
          />
        )}
        {successTrailerThree && trailerThree.results.length !== 0 && (
          <Card
            itemId={
              trailerThree.results.findIndex((el) => el.official === true) !==
              -1
                ? trailerThree.results[
                    trailerThree.results.findIndex((el) => el.official === true)
                  ].id
                : trailerThree.results[0].id
            } // NOTE: itemId is required for track items
            key={
              trailerThree.results.findIndex((el) => el.official === true) !==
              -1
                ? trailerThree.results[
                    trailerThree.results.findIndex((el) => el.official === true)
                  ].id
                : trailerThree.results[0].id
            }
            onClick={handleClick(
              trailerThree.results.findIndex((el) => el.official === true) !==
                -1
                ? trailerThree.results[
                    trailerThree.results.findIndex((el) => el.official === true)
                  ].id
                : trailerThree.results[0].id
            )}
            selected={isItemSelected(
              trailerThree.results.findIndex((el) => el.official === true) !==
                -1
                ? trailerThree.results[
                    trailerThree.results.findIndex((el) => el.official === true)
                  ].id
                : trailerThree.results[0].id
            )}
            trailer={
              trailerThree.results.findIndex((el) => el.official === true) !==
              -1
                ? trailerThree.results[
                    trailerThree.results.findIndex((el) => el.official === true)
                  ]
                : trailerThree.results[0]
            }
            title={trailerThree.title}
          />
        )}
        {successTrailerFour && trailerFour.results.length !== 0 && (
          <Card
            itemId={
              trailerFour.results.findIndex((el) => el.official === true) !== -1
                ? trailerFour.results[
                    trailerFour.results.findIndex((el) => el.official === true)
                  ].id
                : trailerFour.results[0].id
            } // NOTE: itemId is required for track items
            key={
              trailerFour.results.findIndex((el) => el.official === true) !== -1
                ? trailerFour.results[
                    trailerFour.results.findIndex((el) => el.official === true)
                  ].id
                : trailerFour.results[0].id
            }
            onClick={handleClick(
              trailerFour.results.findIndex((el) => el.official === true) !== -1
                ? trailerFour.results[
                    trailerFour.results.findIndex((el) => el.official === true)
                  ].id
                : trailerFour.results[0].id
            )}
            selected={isItemSelected(
              trailerFour.results.findIndex((el) => el.official === true) !== -1
                ? trailerFour.results[
                    trailerFour.results.findIndex((el) => el.official === true)
                  ].id
                : trailerFour.results[0].id
            )}
            trailer={
              trailerFour.results.findIndex((el) => el.official === true) !== -1
                ? trailerFour.results[
                    trailerFour.results.findIndex((el) => el.official === true)
                  ]
                : trailerFour.results[0]
            }
            title={trailerFour.title}
          />
        )}
        {successTrailerFive && trailerFive.results.length !== 0 && (
          <Card
            itemId={
              trailerFive.results.findIndex((el) => el.official === true) !== -1
                ? trailerFive.results[
                    trailerFive.results.findIndex((el) => el.official === true)
                  ].id
                : trailerFive.results[0].id
            } // NOTE: itemId is required for track items
            key={
              trailerFive.results.findIndex((el) => el.official === true) !== -1
                ? trailerFive.results[
                    trailerFive.results.findIndex((el) => el.official === true)
                  ].id
                : trailerFive.results[0].id
            }
            onClick={handleClick(
              trailerFive.results.findIndex((el) => el.official === true) !== -1
                ? trailerFive.results[
                    trailerFive.results.findIndex((el) => el.official === true)
                  ].id
                : trailerFive.results[0].id
            )}
            selected={isItemSelected(
              trailerFive.results.findIndex((el) => el.official === true) !== -1
                ? trailerFive.results[
                    trailerFive.results.findIndex((el) => el.official === true)
                  ].id
                : trailerFive.results[0].id
            )}
            trailer={
              trailerFive.results.findIndex((el) => el.official === true) !== -1
                ? trailerFive.results[
                    trailerFive.results.findIndex((el) => el.official === true)
                  ]
                : trailerFive.results[0]
            }
            title={trailerFive.title}
          />
        )}
        {successTrailerSix && trailerSix.results.length !== 0 && (
          <Card
            itemId={
              trailerSix.results.findIndex((el) => el.official === true) !== -1
                ? trailerSix.results[
                    trailerSix.results.findIndex((el) => el.official === true)
                  ].id
                : trailerSix.results[0].id
            } // NOTE: itemId is required for track items
            key={
              trailerSix.results.findIndex((el) => el.official === true) !== -1
                ? trailerSix.results[
                    trailerSix.results.findIndex((el) => el.official === true)
                  ].id
                : trailerSix.results[0].id
            }
            onClick={handleClick(
              trailerSix.results.findIndex((el) => el.official === true) !== -1
                ? trailerSix.results[
                    trailerSix.results.findIndex((el) => el.official === true)
                  ].id
                : trailerSix.results[0].id
            )}
            selected={isItemSelected(
              trailerSix.results.findIndex((el) => el.official === true) !== -1
                ? trailerSix.results[
                    trailerSix.results.findIndex((el) => el.official === true)
                  ].id
                : trailerSix.results[0].id
            )}
            trailer={
              trailerSix.results.findIndex((el) => el.official === true) !== -1
                ? trailerSix.results[
                    trailerSix.results.findIndex((el) => el.official === true)
                  ]
                : trailerSix.results[0]
            }
            title={trailerSix.title}
          />
        )}
        {successTrailerSeven && trailerSeven.results.length !== 0 && (
          <Card
            itemId={
              trailerSeven.results.findIndex((el) => el.official === true) !==
              -1
                ? trailerSeven.results[
                    trailerSeven.results.findIndex((el) => el.official === true)
                  ].id
                : trailerSeven.results[0].id
            } // NOTE: itemId is required for track items
            key={
              trailerSeven.results.findIndex((el) => el.official === true) !==
              -1
                ? trailerSeven.results[
                    trailerSeven.results.findIndex((el) => el.official === true)
                  ].id
                : trailerSeven.results[0].id
            }
            onClick={handleClick(
              trailerSeven.results.findIndex((el) => el.official === true) !==
                -1
                ? trailerSeven.results[
                    trailerSeven.results.findIndex((el) => el.official === true)
                  ].id
                : trailerSeven.results[0].id
            )}
            selected={isItemSelected(
              trailerSeven.results.findIndex((el) => el.official === true) !==
                -1
                ? trailerSeven.results[
                    trailerSeven.results.findIndex((el) => el.official === true)
                  ].id
                : trailerSeven.results[0].id
            )}
            trailer={
              trailerSeven.results.findIndex((el) => el.official === true) !==
              -1
                ? trailerSeven.results[
                    trailerSeven.results.findIndex((el) => el.official === true)
                  ]
                : trailerSeven.results[0]
            }
            title={trailerSeven.title}
          />
        )}
        {successTrailerEight && trailerEight.results.length !== 0 && (
          <Card
            itemId={
              trailerEight.results.findIndex((el) => el.official === true) !==
              -1
                ? trailerEight.results[
                    trailerEight.results.findIndex((el) => el.official === true)
                  ].id
                : trailerEight.results[0].id
            } // NOTE: itemId is required for track items
            key={
              trailerEight.results.findIndex((el) => el.official === true) !==
              -1
                ? trailerEight.results[
                    trailerEight.results.findIndex((el) => el.official === true)
                  ].id
                : trailerEight.results[0].id
            }
            onClick={handleClick(
              trailerEight.results.findIndex((el) => el.official === true) !==
                -1
                ? trailerEight.results[
                    trailerEight.results.findIndex((el) => el.official === true)
                  ].id
                : trailerEight.results[0].id
            )}
            selected={isItemSelected(
              trailerEight.results.findIndex((el) => el.official === true) !==
                -1
                ? trailerEight.results[
                    trailerEight.results.findIndex((el) => el.official === true)
                  ].id
                : trailerEight.results[0].id
            )}
            trailer={
              trailerEight.results.findIndex((el) => el.official === true) !==
              -1
                ? trailerEight.results[
                    trailerEight.results.findIndex((el) => el.official === true)
                  ]
                : trailerEight.results[0]
            }
            title={trailerEight.title}
          />
        )}
        {successTrailerNine && trailerNine.results.length !== 0 && (
          <Card
            itemId={
              trailerNine.results.findIndex((el) => el.official === true) !== -1
                ? trailerNine.results[
                    trailerNine.results.findIndex((el) => el.official === true)
                  ].id
                : trailerNine.results[0].id
            } // NOTE: itemId is required for track items
            key={
              trailerNine.results.findIndex((el) => el.official === true) !== -1
                ? trailerNine.results[
                    trailerNine.results.findIndex((el) => el.official === true)
                  ].id
                : trailerNine.results[0].id
            }
            onClick={handleClick(
              trailerNine.results.findIndex((el) => el.official === true) !== -1
                ? trailerNine.results[
                    trailerNine.results.findIndex((el) => el.official === true)
                  ].id
                : trailerNine.results[0].id
            )}
            selected={isItemSelected(
              trailerNine.results.findIndex((el) => el.official === true) !== -1
                ? trailerNine.results[
                    trailerNine.results.findIndex((el) => el.official === true)
                  ].id
                : trailerNine.results[0].id
            )}
            trailer={
              trailerNine.results.findIndex((el) => el.official === true) !== -1
                ? trailerNine.results[
                    trailerNine.results.findIndex((el) => el.official === true)
                  ]
                : trailerNine.results[0]
            }
            title={trailerNine.title}
          />
        )}
      </ScrollMenu>
    </div>
  );
};

function Card({ onClick, trailer, title, itemId }) {
  const visibility = useContext(VisibilityContext);
  // console.log(trailer);

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
            <button
              type="button"
              data-modal-toggle="authentication-modal"
              className="absolute top-16 left-36 w-16 h-16 rounded-full focus:outline-none"
            >
              <FontAwesomeIcon icon={faPlay} className="text-white fa-2xl" />
            </button>
          </div>

          <p className="font-semibold text-lg px-3 text-white pt-3 text-center">
            {title}
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
