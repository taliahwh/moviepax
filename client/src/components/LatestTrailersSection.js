import React, { useEffect, useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { useDispatch, useSelector } from 'react-redux';
// import ModalVideo from 'react-modal-video';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import { LeftArrow, RightArrow } from '../components/MediaDetails/Arrows';

import {
  MOVIES_TRAILERS_FAILURE,
  TV_TRAILERS_FAILURE,
} from '../constants/trailerConstants';

import { getMovieTrailers, getTVTrailers } from '../actions/trailerActions';

const LatestTrailersSection = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [selected, setSelected] = React.useState([]);

  const {
    loading: loadingTVTrailers,
    success: successTVTrailers,
    error: errorTVTrailers,
  } = useSelector((state) => state.tvTrailers);

  const {
    loading: loadingTVTrailerOne,
    success: successTVTrailerOne,
    tvTrailerOne,
    error: errorTVTrailerOne,
  } = useSelector((state) => state.tvTrailerOne);

  const {
    loading: loadingTVTrailerTwo,
    success: successTVTrailerTwo,
    tvTrailerTwo,
    error: errorTVTrailerTwo,
  } = useSelector((state) => state.tvTrailerTwo);

  const {
    loading: loadingTVTrailerThree,
    success: successTVTrailerThree,
    tvTrailerThree,
    error: errorTVTrailerThree,
  } = useSelector((state) => state.tvTrailerThree);

  const {
    loading: loadingTVTrailerFour,
    success: successTVTrailerFour,
    tvTrailerFour,
    error: errorTVTrailerFour,
  } = useSelector((state) => state.tvTrailerFour);

  const {
    loading: loadingTVTrailerFive,
    success: successTVTrailerFive,
    tvTrailerFive,
    error: errorTVTrailerFive,
  } = useSelector((state) => state.tvTrailerFive);

  const {
    loading: loadingTVTrailerSix,
    success: successTVTrailerSix,
    tvTrailerSix,
    error: errorTVTrailerSix,
  } = useSelector((state) => state.tvTrailerSix);

  const {
    loading: loadingTVTrailerSeven,
    success: successTVTrailerSeven,
    tvTrailerSeven,
    error: errorTVTrailerSeven,
  } = useSelector((state) => state.tvTrailerSeven);

  const {
    loading: loadingTVTrailerEight,
    success: successTVTrailerEight,
    tvTrailerEight,
    error: errorTVTrailerEight,
  } = useSelector((state) => state.tvTrailerEight);

  const {
    loading: loadingTVTrailerNine,
    success: successTVTrailerNine,
    tvTrailerNine,
    error: errorTVTrailerNine,
  } = useSelector((state) => state.tvTrailerNine);

  /* ---------------------------------------------------------------------------- */
  const {
    loading: loadingMovieTrailers,
    success: successMovieTrailers,
    error: errorMovieTrailers,
  } = useSelector((state) => state.moviesTrailers);

  const {
    loading: loadingMovieTrailerOne,
    success: successMovieTrailerOne,
    movieTrailerOne,
    error: errorMovieTrailerOne,
  } = useSelector((state) => state.movieTrailerOne);

  const {
    loading: loadingMovieTrailerTwo,
    success: successMovieTrailerTwo,
    movieTrailerTwo,
    error: errorMovieTrailerTwo,
  } = useSelector((state) => state.movieTrailerTwo);

  const {
    loading: loadingMovieTrailerThree,
    success: successMovieTrailerThree,
    movieTrailerThree,
    error: errorMovieTrailerThree,
  } = useSelector((state) => state.movieTrailerThree);

  const {
    loading: loadingMovieTrailerFour,
    success: successMovieTrailerFour,
    movieTrailerFour,
    error: errorMovieTrailerFour,
  } = useSelector((state) => state.movieTrailerFour);

  const {
    loading: loadingMovieTrailerFive,
    success: successMovieTrailerFive,
    movieTrailerFive,
    error: errorMovieTrailerFive,
  } = useSelector((state) => state.movieTrailerFive);

  const {
    loading: loadingMovieTrailerSix,
    success: successMovieTrailerSix,
    movieTrailerSix,
    error: errorMovieTrailerSix,
  } = useSelector((state) => state.movieTrailerSix);

  const {
    loading: loadingMovieTrailerSeven,
    success: successMovieTrailerSeven,
    movieTrailerSeven,
    error: errorMovieTrailerSeven,
  } = useSelector((state) => state.movieTrailerSeven);

  const {
    loading: loadingMovieTrailerEight,
    success: successMovieTrailerEight,
    movieTrailerEight,
    error: errorMovieTrailerEight,
  } = useSelector((state) => state.movieTrailerEight);

  const {
    loading: loadingMovieTrailerNine,
    success: successMovieTrailerNine,
    movieTrailerNine,
    error: errorMovieTrailerNine,
  } = useSelector((state) => state.movieTrailerNine);

  /* ---------------------------------------------------------------------------- */

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
    if (location.pathname === '/' || location.pathname === '/trailers/ontv') {
      dispatch({ type: MOVIES_TRAILERS_FAILURE });
      dispatch(getTVTrailers());
    }
    if (location.pathname === '/trailers/movies') {
      dispatch({ type: TV_TRAILERS_FAILURE });
      dispatch(getMovieTrailers());
    }
  }, [dispatch, location]);

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
            to="/trailers/movies"
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
          <TrailersDropdown />
        </div>
      </div>
      {/* Content */}

      {successTVTrailers && (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
          {successTVTrailerOne && tvTrailerOne.results.length !== 0 && (
            <Card
              itemId={
                tvTrailerOne.results.findIndex((el) => el.official === true) !==
                -1
                  ? tvTrailerOne.results[
                      tvTrailerOne.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : tvTrailerOne.results[0].id
              } // NOTE: itemId is required for track items
              key={
                tvTrailerOne.results.findIndex((el) => el.official === true) !==
                -1
                  ? tvTrailerOne.results[
                      tvTrailerOne.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : tvTrailerOne.results[0].id
              }
              onClick={handleClick(
                tvTrailerOne.results.findIndex((el) => el.official === true) !==
                  -1
                  ? tvTrailerOne.results[
                      tvTrailerOne.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : tvTrailerOne.results[0].id
              )}
              selected={isItemSelected(
                tvTrailerOne.results.findIndex((el) => el.official === true) !==
                  -1
                  ? tvTrailerOne.results[
                      tvTrailerOne.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : tvTrailerOne.results[0].id
              )}
              trailer={
                tvTrailerOne.results.findIndex((el) => el.official === true) !==
                -1
                  ? tvTrailerOne.results[
                      tvTrailerOne.results.findIndex(
                        (el) => el.official === true
                      )
                    ]
                  : tvTrailerOne.results[0]
              }
              title={tvTrailerOne.title}
            />
          )}
          {successTVTrailerTwo && tvTrailerTwo.results.length !== 0 && (
            <Card
              itemId={
                tvTrailerTwo.results.findIndex((el) => el.official === true) !==
                -1
                  ? tvTrailerTwo.results[
                      tvTrailerTwo.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : tvTrailerTwo.results[0].id
              } // NOTE: itemId is required for track items
              key={
                tvTrailerTwo.results.findIndex((el) => el.official === true) !==
                -1
                  ? tvTrailerTwo.results[
                      tvTrailerTwo.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : tvTrailerTwo.results[0].id
              }
              onClick={handleClick(
                tvTrailerTwo.results.findIndex((el) => el.official === true) !==
                  -1
                  ? tvTrailerTwo.results[
                      tvTrailerTwo.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : tvTrailerTwo.results[0].id
              )}
              selected={isItemSelected(
                tvTrailerTwo.results.findIndex((el) => el.official === true) !==
                  -1
                  ? tvTrailerTwo.results[
                      tvTrailerTwo.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : tvTrailerTwo.results[0].id
              )}
              trailer={
                tvTrailerTwo.results.findIndex((el) => el.official === true) !==
                -1
                  ? tvTrailerTwo.results[
                      tvTrailerTwo.results.findIndex(
                        (el) => el.official === true
                      )
                    ]
                  : tvTrailerTwo.results[0]
              }
              title={tvTrailerTwo.title}
            />
          )}
          {successTVTrailerThree && tvTrailerThree.results.length !== 0 && (
            <Card
              itemId={
                tvTrailerThree.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? tvTrailerThree.results[
                      tvTrailerThree.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : tvTrailerThree.results[0].id
              } // NOTE: itemId is required for track items
              key={
                tvTrailerThree.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? tvTrailerThree.results[
                      tvTrailerThree.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : tvTrailerThree.results[0].id
              }
              onClick={handleClick(
                tvTrailerThree.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? tvTrailerThree.results[
                      tvTrailerThree.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : tvTrailerThree.results[0].id
              )}
              selected={isItemSelected(
                tvTrailerThree.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? tvTrailerThree.results[
                      tvTrailerThree.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : tvTrailerThree.results[0].id
              )}
              trailer={
                tvTrailerThree.results.findIndex(
                  (el) => el.official === true
                ) !== -1
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
          {successTVTrailerFour && tvTrailerFour.results.length !== 0 && (
            <Card
              itemId={
                tvTrailerFour.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? tvTrailerFour.results[
                      tvTrailerFour.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : tvTrailerFour.results[0].id
              } // NOTE: itemId is required for track items
              key={
                tvTrailerFour.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? tvTrailerFour.results[
                      tvTrailerFour.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : tvTrailerFour.results[0].id
              }
              onClick={handleClick(
                tvTrailerFour.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? tvTrailerFour.results[
                      tvTrailerFour.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : tvTrailerFour.results[0].id
              )}
              selected={isItemSelected(
                tvTrailerFour.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? tvTrailerFour.results[
                      tvTrailerFour.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : tvTrailerFour.results[0].id
              )}
              trailer={
                tvTrailerFour.results.findIndex(
                  (el) => el.official === true
                ) !== -1
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
          {successTVTrailerFive && tvTrailerFive.results.length !== 0 && (
            <Card
              itemId={
                tvTrailerFive.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? tvTrailerFive.results[
                      tvTrailerFive.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : tvTrailerFive.results[0].id
              } // NOTE: itemId is required for track items
              key={
                tvTrailerFive.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? tvTrailerFive.results[
                      tvTrailerFive.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : tvTrailerFive.results[0].id
              }
              onClick={handleClick(
                tvTrailerFive.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? tvTrailerFive.results[
                      tvTrailerFive.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : tvTrailerFive.results[0].id
              )}
              selected={isItemSelected(
                tvTrailerFive.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? tvTrailerFive.results[
                      tvTrailerFive.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : tvTrailerFive.results[0].id
              )}
              trailer={
                tvTrailerFive.results.findIndex(
                  (el) => el.official === true
                ) !== -1
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
          {successTVTrailerSix && tvTrailerSix.results.length !== 0 && (
            <Card
              itemId={
                tvTrailerSix.results.findIndex((el) => el.official === true) !==
                -1
                  ? tvTrailerSix.results[
                      tvTrailerSix.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : tvTrailerSix.results[0].id
              } // NOTE: itemId is required for track items
              key={
                tvTrailerSix.results.findIndex((el) => el.official === true) !==
                -1
                  ? tvTrailerSix.results[
                      tvTrailerSix.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : tvTrailerSix.results[0].id
              }
              onClick={handleClick(
                tvTrailerSix.results.findIndex((el) => el.official === true) !==
                  -1
                  ? tvTrailerSix.results[
                      tvTrailerSix.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : tvTrailerSix.results[0].id
              )}
              selected={isItemSelected(
                tvTrailerSix.results.findIndex((el) => el.official === true) !==
                  -1
                  ? tvTrailerSix.results[
                      tvTrailerSix.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : tvTrailerSix.results[0].id
              )}
              trailer={
                tvTrailerSix.results.findIndex((el) => el.official === true) !==
                -1
                  ? tvTrailerSix.results[
                      tvTrailerSix.results.findIndex(
                        (el) => el.official === true
                      )
                    ]
                  : tvTrailerSix.results[0]
              }
              title={tvTrailerSix.title}
            />
          )}
          {successTVTrailerSeven && tvTrailerSeven.results.length !== 0 && (
            <Card
              itemId={
                tvTrailerSeven.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? tvTrailerSeven.results[
                      tvTrailerSeven.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : tvTrailerSeven.results[0].id
              } // NOTE: itemId is required for track items
              key={
                tvTrailerSeven.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? tvTrailerSeven.results[
                      tvTrailerSeven.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : tvTrailerSeven.results[0].id
              }
              onClick={handleClick(
                tvTrailerSeven.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? tvTrailerSeven.results[
                      tvTrailerSeven.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : tvTrailerSeven.results[0].id
              )}
              selected={isItemSelected(
                tvTrailerSeven.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? tvTrailerSeven.results[
                      tvTrailerSeven.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : tvTrailerSeven.results[0].id
              )}
              trailer={
                tvTrailerSeven.results.findIndex(
                  (el) => el.official === true
                ) !== -1
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
          {successTVTrailerEight && tvTrailerEight.results.length !== 0 && (
            <Card
              itemId={
                tvTrailerEight.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? tvTrailerEight.results[
                      tvTrailerEight.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : tvTrailerEight.results[0].id
              } // NOTE: itemId is required for track items
              key={
                tvTrailerEight.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? tvTrailerEight.results[
                      tvTrailerEight.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : tvTrailerEight.results[0].id
              }
              onClick={handleClick(
                tvTrailerEight.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? tvTrailerEight.results[
                      tvTrailerEight.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : tvTrailerEight.results[0].id
              )}
              selected={isItemSelected(
                tvTrailerEight.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? tvTrailerEight.results[
                      tvTrailerEight.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : tvTrailerEight.results[0].id
              )}
              trailer={
                tvTrailerEight.results.findIndex(
                  (el) => el.official === true
                ) !== -1
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
          {successTVTrailerNine && tvTrailerNine.results.length !== 0 && (
            <Card
              itemId={
                tvTrailerNine.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? tvTrailerNine.results[
                      tvTrailerNine.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : tvTrailerNine.results[0].id
              } // NOTE: itemId is required for track items
              key={
                tvTrailerNine.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? tvTrailerNine.results[
                      tvTrailerNine.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : tvTrailerNine.results[0].id
              }
              onClick={handleClick(
                tvTrailerNine.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? tvTrailerNine.results[
                      tvTrailerNine.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : tvTrailerNine.results[0].id
              )}
              selected={isItemSelected(
                tvTrailerNine.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? tvTrailerNine.results[
                      tvTrailerNine.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : tvTrailerNine.results[0].id
              )}
              trailer={
                tvTrailerNine.results.findIndex(
                  (el) => el.official === true
                ) !== -1
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
        </ScrollMenu>
      )}

      {/* <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {successTVTrailerOne && tvTrailerOne.results.length !== 0 && (
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
        )} */}

      {/* ---------------------------------------------------------------------------------- */}

      {successMovieTrailers && (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
          {successMovieTrailerOne && movieTrailerOne.results.length !== 0 && (
            <Card
              itemId={
                movieTrailerOne.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? movieTrailerOne.results[
                      movieTrailerOne.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : movieTrailerOne.results[0].id
              } // NOTE: itemId is required for track items
              key={
                movieTrailerOne.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? movieTrailerOne.results[
                      movieTrailerOne.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : movieTrailerOne.results[0].id
              }
              onClick={handleClick(
                movieTrailerOne.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? movieTrailerOne.results[
                      movieTrailerOne.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : movieTrailerOne.results[0].id
              )}
              selected={isItemSelected(
                movieTrailerOne.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? movieTrailerOne.results[
                      movieTrailerOne.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : movieTrailerOne.results[0].id
              )}
              trailer={
                movieTrailerOne.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? movieTrailerOne.results[
                      movieTrailerOne.results.findIndex(
                        (el) => el.official === true
                      )
                    ]
                  : movieTrailerOne.results[0]
              }
              title={movieTrailerOne.title}
            />
          )}
          {successMovieTrailerTwo && movieTrailerTwo.results.length !== 0 && (
            <Card
              itemId={
                movieTrailerTwo.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? movieTrailerTwo.results[
                      movieTrailerTwo.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : movieTrailerTwo.results[0].id
              } // NOTE: itemId is required for track items
              key={
                movieTrailerTwo.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? movieTrailerTwo.results[
                      movieTrailerTwo.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : movieTrailerTwo.results[0].id
              }
              onClick={handleClick(
                movieTrailerTwo.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? movieTrailerTwo.results[
                      movieTrailerTwo.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : movieTrailerTwo.results[0].id
              )}
              selected={isItemSelected(
                movieTrailerTwo.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? movieTrailerTwo.results[
                      movieTrailerTwo.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : movieTrailerTwo.results[0].id
              )}
              trailer={
                movieTrailerTwo.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? movieTrailerTwo.results[
                      movieTrailerTwo.results.findIndex(
                        (el) => el.official === true
                      )
                    ]
                  : movieTrailerTwo.results[0]
              }
              title={movieTrailerTwo.title}
            />
          )}
          {successMovieTrailerThree && movieTrailerThree.results.length !== 0 && (
            <Card
              itemId={
                movieTrailerThree.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? movieTrailerThree.results[
                      movieTrailerThree.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : movieTrailerThree.results[0].id
              } // NOTE: itemId is required for track items
              key={
                movieTrailerThree.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? movieTrailerThree.results[
                      movieTrailerThree.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : movieTrailerThree.results[0].id
              }
              onClick={handleClick(
                movieTrailerThree.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? movieTrailerThree.results[
                      movieTrailerThree.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : movieTrailerThree.results[0].id
              )}
              selected={isItemSelected(
                movieTrailerThree.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? movieTrailerThree.results[
                      movieTrailerThree.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : movieTrailerThree.results[0].id
              )}
              trailer={
                movieTrailerThree.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? movieTrailerThree.results[
                      movieTrailerThree.results.findIndex(
                        (el) => el.official === true
                      )
                    ]
                  : movieTrailerThree.results[0]
              }
              title={movieTrailerThree.title}
            />
          )}
          {successMovieTrailerFour && movieTrailerFour.results.length !== 0 && (
            <Card
              itemId={
                movieTrailerFour.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? movieTrailerFour.results[
                      movieTrailerFour.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : movieTrailerFour.results[0].id
              } // NOTE: itemId is required for track items
              key={
                movieTrailerFour.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? movieTrailerFour.results[
                      movieTrailerFour.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : movieTrailerFour.results[0].id
              }
              onClick={handleClick(
                movieTrailerFour.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? movieTrailerFour.results[
                      movieTrailerFour.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : movieTrailerFour.results[0].id
              )}
              selected={isItemSelected(
                movieTrailerFour.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? movieTrailerFour.results[
                      movieTrailerFour.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : movieTrailerFour.results[0].id
              )}
              trailer={
                movieTrailerFour.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? movieTrailerFour.results[
                      movieTrailerFour.results.findIndex(
                        (el) => el.official === true
                      )
                    ]
                  : movieTrailerFour.results[0]
              }
              title={movieTrailerFour.title}
            />
          )}
          {successMovieTrailerFive && movieTrailerFive.results.length !== 0 && (
            <Card
              itemId={
                movieTrailerFive.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? movieTrailerFive.results[
                      movieTrailerFive.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : movieTrailerFive.results[0].id
              } // NOTE: itemId is required for track items
              key={
                movieTrailerFive.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? movieTrailerFive.results[
                      movieTrailerFive.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : movieTrailerFive.results[0].id
              }
              onClick={handleClick(
                movieTrailerFive.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? movieTrailerFive.results[
                      movieTrailerFive.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : movieTrailerFive.results[0].id
              )}
              selected={isItemSelected(
                movieTrailerFive.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? movieTrailerFive.results[
                      movieTrailerFive.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : movieTrailerFive.results[0].id
              )}
              trailer={
                movieTrailerFive.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? movieTrailerFive.results[
                      movieTrailerFive.results.findIndex(
                        (el) => el.official === true
                      )
                    ]
                  : movieTrailerFive.results[0]
              }
              title={movieTrailerFive.title}
            />
          )}
          {successMovieTrailerSix && movieTrailerSix.results.length !== 0 && (
            <Card
              itemId={
                movieTrailerSix.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? movieTrailerSix.results[
                      movieTrailerSix.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : movieTrailerSix.results[0].id
              } // NOTE: itemId is required for track items
              key={
                movieTrailerSix.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? movieTrailerSix.results[
                      movieTrailerSix.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : movieTrailerSix.results[0].id
              }
              onClick={handleClick(
                movieTrailerSix.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? movieTrailerSix.results[
                      movieTrailerSix.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : movieTrailerSix.results[0].id
              )}
              selected={isItemSelected(
                movieTrailerSix.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? movieTrailerSix.results[
                      movieTrailerSix.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : movieTrailerSix.results[0].id
              )}
              trailer={
                movieTrailerSix.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? movieTrailerSix.results[
                      movieTrailerSix.results.findIndex(
                        (el) => el.official === true
                      )
                    ]
                  : movieTrailerSix.results[0]
              }
              title={movieTrailerSix.title}
            />
          )}
          {successMovieTrailerSeven && movieTrailerSeven.results.length !== 0 && (
            <Card
              itemId={
                movieTrailerSeven.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? movieTrailerSeven.results[
                      movieTrailerSeven.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : movieTrailerSeven.results[0].id
              } // NOTE: itemId is required for track items
              key={
                movieTrailerSeven.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? movieTrailerSeven.results[
                      movieTrailerSeven.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : movieTrailerSeven.results[0].id
              }
              onClick={handleClick(
                movieTrailerSeven.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? movieTrailerSeven.results[
                      movieTrailerSeven.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : movieTrailerSeven.results[0].id
              )}
              selected={isItemSelected(
                movieTrailerSeven.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? movieTrailerSeven.results[
                      movieTrailerSeven.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : movieTrailerSeven.results[0].id
              )}
              trailer={
                movieTrailerSeven.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? movieTrailerSeven.results[
                      movieTrailerSeven.results.findIndex(
                        (el) => el.official === true
                      )
                    ]
                  : movieTrailerSeven.results[0]
              }
              title={movieTrailerSeven.title}
            />
          )}
          {successMovieTrailerEight && movieTrailerEight.results.length !== 0 && (
            <Card
              itemId={
                movieTrailerEight.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? movieTrailerEight.results[
                      movieTrailerEight.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : movieTrailerEight.results[0].id
              } // NOTE: itemId is required for track items
              key={
                movieTrailerEight.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? movieTrailerEight.results[
                      movieTrailerEight.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : movieTrailerEight.results[0].id
              }
              onClick={handleClick(
                movieTrailerEight.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? movieTrailerEight.results[
                      movieTrailerEight.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : movieTrailerEight.results[0].id
              )}
              selected={isItemSelected(
                movieTrailerEight.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? movieTrailerEight.results[
                      movieTrailerEight.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : movieTrailerEight.results[0].id
              )}
              trailer={
                movieTrailerEight.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? movieTrailerEight.results[
                      movieTrailerEight.results.findIndex(
                        (el) => el.official === true
                      )
                    ]
                  : movieTrailerEight.results[0]
              }
              title={movieTrailerEight.title}
            />
          )}
          {successMovieTrailerNine && movieTrailerNine.results.length !== 0 && (
            <Card
              itemId={
                movieTrailerNine.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? movieTrailerNine.results[
                      movieTrailerNine.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : movieTrailerNine.results[0].id
              } // NOTE: itemId is required for track items
              key={
                movieTrailerNine.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? movieTrailerNine.results[
                      movieTrailerNine.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : movieTrailerNine.results[0].id
              }
              onClick={handleClick(
                movieTrailerNine.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? movieTrailerNine.results[
                      movieTrailerNine.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : movieTrailerNine.results[0].id
              )}
              selected={isItemSelected(
                movieTrailerNine.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? movieTrailerNine.results[
                      movieTrailerNine.results.findIndex(
                        (el) => el.official === true
                      )
                    ].id
                  : movieTrailerNine.results[0].id
              )}
              trailer={
                movieTrailerNine.results.findIndex(
                  (el) => el.official === true
                ) !== -1
                  ? movieTrailerNine.results[
                      movieTrailerNine.results.findIndex(
                        (el) => el.official === true
                      )
                    ]
                  : movieTrailerNine.results[0]
              }
              title={movieTrailerNine.title}
            />
          )}
        </ScrollMenu>
      )}
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
            <a
              href={`https://www.youtube.com/watch?v=${trailer.key}`}
              target={'_blank'}
              rel="noreferrer noopener"
              className="absolute top-16 left-36 w-16 h-16 rounded-full focus:outline-none"
            >
              <FontAwesomeIcon icon={faPlay} className="text-white fa-2xl" />
            </a>
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

const TrailersDropdown = () => {
  return (
    <>
      <button
        id="trailersDropdown"
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
        id="trailers"
        className="hidden z-10 w-28 text-base list-none bg-white rounded divide-y divide-gray-100 border-1 border-secondary"
      >
        <ul className="py-1" aria-labelledby="trailersDropdown">
          <li>
            <Link
              to="/trailers/ontv"
              className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              On TV
            </Link>
          </li>
          <li>
            <Link
              to="/trailers/movies"
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
