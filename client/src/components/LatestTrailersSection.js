import React, { useEffect, useState, useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { useDispatch, useSelector } from 'react-redux';
// import ModalVideo from 'react-modal-video';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import { LeftArrow, RightArrow } from '../components/MediaDetails/Arrows';
import TrailerCard from './TrailerCard';

import { getTVTrailers } from '../actions/trailerActions';

const LatestTrailersSection = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [selected, setSelected] = React.useState([]);

  const {
    loading: loadingTrailerOne,
    success: successTrailerOne,
    tvTrailerOne,
    error: errorTrailerOne,
  } = useSelector((state) => state.tvTrailerOne);

  const {
    loading: loadingTrailerTwo,
    success: successTrailerTwo,
    tvTrailerTwo,
    error: errorTrailerTwo,
  } = useSelector((state) => state.tvTrailerTwo);

  const {
    loading: loadingTrailerThree,
    success: successTrailerThree,
    tvTrailerThree,
    error: errorTrailerThree,
  } = useSelector((state) => state.tvTrailerThree);

  const {
    loading: loadingTrailerFour,
    success: successTrailerFour,
    tvTrailerFour,
    error: errorTrailerFour,
  } = useSelector((state) => state.tvTrailerFour);

  const {
    loading: loadingTrailerFive,
    success: successTrailerFive,
    tvTrailerFive,
    error: errorTrailerFive,
  } = useSelector((state) => state.tvTrailerFive);

  const {
    loading: loadingTrailerSix,
    success: successTrailerSix,
    tvTrailerSix,
    error: errorTrailerSix,
  } = useSelector((state) => state.tvTrailerSix);

  const {
    loading: loadingTrailerSeven,
    success: successTrailerSeven,
    tvTrailerSeven,
    error: errorTrailerSeven,
  } = useSelector((state) => state.tvTrailerSeven);

  const {
    loading: loadingTrailerEight,
    success: successTrailerEight,
    tvTrailerEight,
    error: errorTrailerEight,
  } = useSelector((state) => state.tvTrailerEight);

  const {
    loading: loadingTrailerNine,
    success: successTrailerNine,
    tvTrailerNine,
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
        {successTrailerOne && tvTrailerOne.results.length !== 0 && (
          <Card
            itemId={
              tvTrailerOne.results.findIndex((el) => el.official === true) !==
              -1
                ? tvTrailerOne.results[
                    tvTrailerOne.results.findIndex((el) => el.official === true)
                  ].id
                : tvTrailerOne.results[0].id
            } // NOTE: itemId is required for track items
            key={
              tvTrailerOne.results.findIndex((el) => el.official === true) !==
              -1
                ? tvTrailerOne.results[
                    tvTrailerOne.results.findIndex((el) => el.official === true)
                  ].id
                : tvTrailerOne.results[0].id
            }
            onClick={handleClick(
              tvTrailerOne.results.findIndex((el) => el.official === true) !==
                -1
                ? tvTrailerOne.results[
                    tvTrailerOne.results.findIndex((el) => el.official === true)
                  ].id
                : tvTrailerOne.results[0].id
            )}
            selected={isItemSelected(
              tvTrailerOne.results.findIndex((el) => el.official === true) !==
                -1
                ? tvTrailerOne.results[
                    tvTrailerOne.results.findIndex((el) => el.official === true)
                  ].id
                : tvTrailerOne.results[0].id
            )}
            trailer={
              tvTrailerOne.results.findIndex((el) => el.official === true) !==
              -1
                ? tvTrailerOne.results[
                    tvTrailerOne.results.findIndex((el) => el.official === true)
                  ]
                : tvTrailerOne.results[0]
            }
            title={tvTrailerOne.title}
          />
        )}
        {successTrailerTwo && tvTrailerTwo.results.length !== 0 && (
          <Card
            itemId={
              tvTrailerTwo.results.findIndex((el) => el.official === true) !==
              -1
                ? tvTrailerTwo.results[
                    tvTrailerTwo.results.findIndex((el) => el.official === true)
                  ].id
                : tvTrailerTwo.results[0].id
            } // NOTE: itemId is required for track items
            key={
              tvTrailerTwo.results.findIndex((el) => el.official === true) !==
              -1
                ? tvTrailerTwo.results[
                    tvTrailerTwo.results.findIndex((el) => el.official === true)
                  ].id
                : tvTrailerTwo.results[0].id
            }
            onClick={handleClick(
              tvTrailerTwo.results.findIndex((el) => el.official === true) !==
                -1
                ? tvTrailerTwo.results[
                    tvTrailerTwo.results.findIndex((el) => el.official === true)
                  ].id
                : tvTrailerTwo.results[0].id
            )}
            selected={isItemSelected(
              tvTrailerTwo.results.findIndex((el) => el.official === true) !==
                -1
                ? tvTrailerTwo.results[
                    tvTrailerTwo.results.findIndex((el) => el.official === true)
                  ].id
                : tvTrailerTwo.results[0].id
            )}
            trailer={
              tvTrailerTwo.results.findIndex((el) => el.official === true) !==
              -1
                ? tvTrailerTwo.results[
                    tvTrailerTwo.results.findIndex((el) => el.official === true)
                  ]
                : tvTrailerTwo.results[0]
            }
            title={tvTrailerTwo.title}
          />
        )}
        {successTrailerThree && tvTrailerThree.results.length !== 0 && (
          <Card
            itemId={
              tvTrailerThree.results.findIndex((el) => el.official === true) !==
              -1
                ? tvTrailerThree.results[
                    tvTrailerThree.results.findIndex(
                      (el) => el.official === true
                    )
                  ].id
                : tvTrailerThree.results[0].id
            } // NOTE: itemId is required for track items
            key={
              tvTrailerThree.results.findIndex((el) => el.official === true) !==
              -1
                ? tvTrailerThree.results[
                    tvTrailerThree.results.findIndex(
                      (el) => el.official === true
                    )
                  ].id
                : tvTrailerThree.results[0].id
            }
            onClick={handleClick(
              tvTrailerThree.results.findIndex((el) => el.official === true) !==
                -1
                ? tvTrailerThree.results[
                    tvTrailerThree.results.findIndex(
                      (el) => el.official === true
                    )
                  ].id
                : tvTrailerThree.results[0].id
            )}
            selected={isItemSelected(
              tvTrailerThree.results.findIndex((el) => el.official === true) !==
                -1
                ? tvTrailerThree.results[
                    tvTrailerThree.results.findIndex(
                      (el) => el.official === true
                    )
                  ].id
                : tvTrailerThree.results[0].id
            )}
            trailer={
              tvTrailerThree.results.findIndex((el) => el.official === true) !==
              -1
                ? tvTrailerThree.results[
                    tvTrailerThree.results.findIndex(
                      (el) => el.official === true
                    )
                  ]
                : tvTrailerThree.results[0]
            }
            title={tvTrailerThree.title}
          />
        )}
        {successTrailerFour && tvTrailerFour.results.length !== 0 && (
          <Card
            itemId={
              tvTrailerFour.results.findIndex((el) => el.official === true) !==
              -1
                ? tvTrailerFour.results[
                    tvTrailerFour.results.findIndex(
                      (el) => el.official === true
                    )
                  ].id
                : tvTrailerFour.results[0].id
            } // NOTE: itemId is required for track items
            key={
              tvTrailerFour.results.findIndex((el) => el.official === true) !==
              -1
                ? tvTrailerFour.results[
                    tvTrailerFour.results.findIndex(
                      (el) => el.official === true
                    )
                  ].id
                : tvTrailerFour.results[0].id
            }
            onClick={handleClick(
              tvTrailerFour.results.findIndex((el) => el.official === true) !==
                -1
                ? tvTrailerFour.results[
                    tvTrailerFour.results.findIndex(
                      (el) => el.official === true
                    )
                  ].id
                : tvTrailerFour.results[0].id
            )}
            selected={isItemSelected(
              tvTrailerFour.results.findIndex((el) => el.official === true) !==
                -1
                ? tvTrailerFour.results[
                    tvTrailerFour.results.findIndex(
                      (el) => el.official === true
                    )
                  ].id
                : tvTrailerFour.results[0].id
            )}
            trailer={
              tvTrailerFour.results.findIndex((el) => el.official === true) !==
              -1
                ? tvTrailerFour.results[
                    tvTrailerFour.results.findIndex(
                      (el) => el.official === true
                    )
                  ]
                : tvTrailerFour.results[0]
            }
            title={tvTrailerFour.title}
          />
        )}
        {successTrailerFive && tvTrailerFive.results.length !== 0 && (
          <Card
            itemId={
              tvTrailerFive.results.findIndex((el) => el.official === true) !==
              -1
                ? tvTrailerFive.results[
                    tvTrailerFive.results.findIndex(
                      (el) => el.official === true
                    )
                  ].id
                : tvTrailerFive.results[0].id
            } // NOTE: itemId is required for track items
            key={
              tvTrailerFive.results.findIndex((el) => el.official === true) !==
              -1
                ? tvTrailerFive.results[
                    tvTrailerFive.results.findIndex(
                      (el) => el.official === true
                    )
                  ].id
                : tvTrailerFive.results[0].id
            }
            onClick={handleClick(
              tvTrailerFive.results.findIndex((el) => el.official === true) !==
                -1
                ? tvTrailerFive.results[
                    tvTrailerFive.results.findIndex(
                      (el) => el.official === true
                    )
                  ].id
                : tvTrailerFive.results[0].id
            )}
            selected={isItemSelected(
              tvTrailerFive.results.findIndex((el) => el.official === true) !==
                -1
                ? tvTrailerFive.results[
                    tvTrailerFive.results.findIndex(
                      (el) => el.official === true
                    )
                  ].id
                : tvTrailerFive.results[0].id
            )}
            trailer={
              tvTrailerFive.results.findIndex((el) => el.official === true) !==
              -1
                ? tvTrailerFive.results[
                    tvTrailerFive.results.findIndex(
                      (el) => el.official === true
                    )
                  ]
                : tvTrailerFive.results[0]
            }
            title={tvTrailerFive.title}
          />
        )}
        {successTrailerSix && tvTrailerSix.results.length !== 0 && (
          <Card
            itemId={
              tvTrailerSix.results.findIndex((el) => el.official === true) !==
              -1
                ? tvTrailerSix.results[
                    tvTrailerSix.results.findIndex((el) => el.official === true)
                  ].id
                : tvTrailerSix.results[0].id
            } // NOTE: itemId is required for track items
            key={
              tvTrailerSix.results.findIndex((el) => el.official === true) !==
              -1
                ? tvTrailerSix.results[
                    tvTrailerSix.results.findIndex((el) => el.official === true)
                  ].id
                : tvTrailerSix.results[0].id
            }
            onClick={handleClick(
              tvTrailerSix.results.findIndex((el) => el.official === true) !==
                -1
                ? tvTrailerSix.results[
                    tvTrailerSix.results.findIndex((el) => el.official === true)
                  ].id
                : tvTrailerSix.results[0].id
            )}
            selected={isItemSelected(
              tvTrailerSix.results.findIndex((el) => el.official === true) !==
                -1
                ? tvTrailerSix.results[
                    tvTrailerSix.results.findIndex((el) => el.official === true)
                  ].id
                : tvTrailerSix.results[0].id
            )}
            trailer={
              tvTrailerSix.results.findIndex((el) => el.official === true) !==
              -1
                ? tvTrailerSix.results[
                    tvTrailerSix.results.findIndex((el) => el.official === true)
                  ]
                : tvTrailerSix.results[0]
            }
            title={tvTrailerSix.title}
          />
        )}
        {successTrailerSeven && tvTrailerSeven.results.length !== 0 && (
          <Card
            itemId={
              tvTrailerSeven.results.findIndex((el) => el.official === true) !==
              -1
                ? tvTrailerSeven.results[
                    tvTrailerSeven.results.findIndex(
                      (el) => el.official === true
                    )
                  ].id
                : tvTrailerSeven.results[0].id
            } // NOTE: itemId is required for track items
            key={
              tvTrailerSeven.results.findIndex((el) => el.official === true) !==
              -1
                ? tvTrailerSeven.results[
                    tvTrailerSeven.results.findIndex(
                      (el) => el.official === true
                    )
                  ].id
                : tvTrailerSeven.results[0].id
            }
            onClick={handleClick(
              tvTrailerSeven.results.findIndex((el) => el.official === true) !==
                -1
                ? tvTrailerSeven.results[
                    tvTrailerSeven.results.findIndex(
                      (el) => el.official === true
                    )
                  ].id
                : tvTrailerSeven.results[0].id
            )}
            selected={isItemSelected(
              tvTrailerSeven.results.findIndex((el) => el.official === true) !==
                -1
                ? tvTrailerSeven.results[
                    tvTrailerSeven.results.findIndex(
                      (el) => el.official === true
                    )
                  ].id
                : tvTrailerSeven.results[0].id
            )}
            trailer={
              tvTrailerSeven.results.findIndex((el) => el.official === true) !==
              -1
                ? tvTrailerSeven.results[
                    tvTrailerSeven.results.findIndex(
                      (el) => el.official === true
                    )
                  ]
                : tvTrailerSeven.results[0]
            }
            title={tvTrailerSeven.title}
          />
        )}
        {successTrailerEight && tvTrailerEight.results.length !== 0 && (
          <Card
            itemId={
              tvTrailerEight.results.findIndex((el) => el.official === true) !==
              -1
                ? tvTrailerEight.results[
                    tvTrailerEight.results.findIndex(
                      (el) => el.official === true
                    )
                  ].id
                : tvTrailerEight.results[0].id
            } // NOTE: itemId is required for track items
            key={
              tvTrailerEight.results.findIndex((el) => el.official === true) !==
              -1
                ? tvTrailerEight.results[
                    tvTrailerEight.results.findIndex(
                      (el) => el.official === true
                    )
                  ].id
                : tvTrailerEight.results[0].id
            }
            onClick={handleClick(
              tvTrailerEight.results.findIndex((el) => el.official === true) !==
                -1
                ? tvTrailerEight.results[
                    tvTrailerEight.results.findIndex(
                      (el) => el.official === true
                    )
                  ].id
                : tvTrailerEight.results[0].id
            )}
            selected={isItemSelected(
              tvTrailerEight.results.findIndex((el) => el.official === true) !==
                -1
                ? tvTrailerEight.results[
                    tvTrailerEight.results.findIndex(
                      (el) => el.official === true
                    )
                  ].id
                : tvTrailerEight.results[0].id
            )}
            trailer={
              tvTrailerEight.results.findIndex((el) => el.official === true) !==
              -1
                ? tvTrailerEight.results[
                    tvTrailerEight.results.findIndex(
                      (el) => el.official === true
                    )
                  ]
                : tvTrailerEight.results[0]
            }
            title={tvTrailerEight.title}
          />
        )}
        {successTrailerNine && tvTrailerNine.results.length !== 0 && (
          <Card
            itemId={
              tvTrailerNine.results.findIndex((el) => el.official === true) !==
              -1
                ? tvTrailerNine.results[
                    tvTrailerNine.results.findIndex(
                      (el) => el.official === true
                    )
                  ].id
                : tvTrailerNine.results[0].id
            } // NOTE: itemId is required for track items
            key={
              tvTrailerNine.results.findIndex((el) => el.official === true) !==
              -1
                ? tvTrailerNine.results[
                    tvTrailerNine.results.findIndex(
                      (el) => el.official === true
                    )
                  ].id
                : tvTrailerNine.results[0].id
            }
            onClick={handleClick(
              tvTrailerNine.results.findIndex((el) => el.official === true) !==
                -1
                ? tvTrailerNine.results[
                    tvTrailerNine.results.findIndex(
                      (el) => el.official === true
                    )
                  ].id
                : tvTrailerNine.results[0].id
            )}
            selected={isItemSelected(
              tvTrailerNine.results.findIndex((el) => el.official === true) !==
                -1
                ? tvTrailerNine.results[
                    tvTrailerNine.results.findIndex(
                      (el) => el.official === true
                    )
                  ].id
                : tvTrailerNine.results[0].id
            )}
            trailer={
              tvTrailerNine.results.findIndex((el) => el.official === true) !==
              -1
                ? tvTrailerNine.results[
                    tvTrailerNine.results.findIndex(
                      (el) => el.official === true
                    )
                  ]
                : tvTrailerNine.results[0]
            }
            title={tvTrailerNine.title}
          />
        )}

        {/* ---------------------------------------------------------------------------------- */}
      </ScrollMenu>
    </div>
  );
};

function Card({ onClick, trailer, title }) {
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
