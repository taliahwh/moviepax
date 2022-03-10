import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import Footer from '../components/Footer';

import {
  TV_DETAILS_FAILURE,
  MOVIE_DETAILS_FAILURE,
} from '../constants/mediaContstants';
import { getMovieDetails, getTVDetails } from '../actions/mediaActions';

const CastScreen = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { id } = useParams();

  // MOVIE STATE

  const {
    loading: loadingMovieDetails,
    error: errorMovieDetails,
    success: successMovieDetails,
    movieDetails,
  } = useSelector((state) => state.movieDetails);

  const {
    loading: loadingMovieCast,
    error: errorMovieCast,
    success: successMovieCast,
    movieCast,
  } = useSelector((state) => state.movieCast);

  // TV STATE

  const {
    loading: loadingTVDetails,
    error: errorTVDetails,
    success: successTVDetails,
    tvDetails,
  } = useSelector((state) => state.tvDetails);

  const {
    loading: loadingTVCast,
    error: errorTVCast,
    success: successTVCast,
    tvCast,
  } = useSelector((state) => state.tvCast);

  useEffect(() => {
    if (location.pathname.includes('/movie')) {
      dispatch({ type: TV_DETAILS_FAILURE });
      dispatch(getMovieDetails(id));
    } else if (location.pathname.includes('/tv')) {
      dispatch({ type: MOVIE_DETAILS_FAILURE });
      dispatch(getTVDetails(id));
    }
  }, [dispatch, id, location]);

  return (
    <div className="flex flex-col space-y-5 md:space-y-8 h-full mx-auto max-w-8xl">
      {successMovieDetails && successMovieCast && (
        <>
          {/* Title Section */}
          <div className="flex space-x-4 items-center bg-stone-600 h-full px-8 py-5 sm:px-10 md:px-12">
            <img
              className="w-16 h-22 rounded-md"
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movieDetails.data.poster_path}`}
              alt="prop"
            />
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold text-white">
                {movieDetails.data.original_title}
                <span className="font-medium pl-1">
                  ({moment(movieDetails.data.release_date).format('YYYY')})
                </span>
              </h1>
              <Link
                to={`/movie/${id}`}
                className="font-medium text-neutral-300"
              >
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="text-neutral-300 pr-1 text-sm"
                />
                Back to Main
              </Link>
            </div>
          </div>

          {/* Cast and Crew */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            <div className=" col-span-1 px-8 sm:px-10 md:px-12">
              {/* Cast */}
              <h1 className="font-semibold text-secondary text-2xl">
                Cast{' '}
                <span className="font-normal text-neutral-500 pl-1">
                  {movieCast.data.cast.length}
                </span>
              </h1>
              {movieCast.data.cast.map((item, index) => (
                <div key={index}>
                  <div className="flex space-x-4 py-2 items-center">
                    <img
                      className="w-16 h-16 rounded-md"
                      src={
                        item.profile_path
                          ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.profile_path}`
                          : `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`
                      }
                      alt="character name"
                    />
                    <div className="flex flex-col">
                      <p className="font-bold">{item.name}</p>
                      <p>{item.character}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Crew */}
            <div className="col-span-1 px-8 sm:px-0">
              <h1 className="font-semibold text-secondary text-2xl ">
                Crew{' '}
                <span className="font-normal text-neutral-500 pl-1">
                  {movieCast.data.crew.length}
                </span>
              </h1>
              {movieCast.data.crew.map((item, index) => (
                <div key={index}>
                  <div className="flex space-x-4 py-2 items-center">
                    <img
                      className="w-16 h-16 rounded-md"
                      src={
                        item.profile_path
                          ? `https://image.tmdb.org/t/p/w600_and_h600_bestv2${item.profile_path}`
                          : `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`
                      }
                      alt="character name"
                    />
                    <div className="flex flex-col">
                      <p className="font-bold">{item.name}</p>
                      <p>{item.known_for_department}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {successTVDetails && successTVCast && (
        <>
          {/* Title Section */}
          <div className="flex space-x-4 items-center bg-stone-600 h-full px-8 py-5 sm:px-10 md:px-12">
            <img
              className="w-16 h-22 rounded-md"
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${tvDetails.data.poster_path}`}
              alt="prop"
            />
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold text-white">
                {tvDetails.data.name}
                <span className="font-medium pl-1">
                  ({moment(tvDetails.data.first_air_date).format('YYYY')})
                </span>
              </h1>
              <Link to={`/tv/${id}`} className="font-medium text-neutral-300">
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="text-neutral-300 pr-1 text-sm"
                />
                Back to Main
              </Link>
            </div>
          </div>

          {/* Cast and Crew */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            <div className=" col-span-1 px-8 sm:px-10 md:px-12">
              {/* Cast */}
              <h1 className="font-semibold text-secondary text-2xl pb-3">
                Cast{' '}
                <span className="font-normal text-neutral-500 pl-1">
                  {tvCast.data.cast.length}
                </span>
              </h1>
              {tvCast.data.cast
                .sort((a, b) => a.order - b.order)
                .map((item, index) => (
                  <div key={index}>
                    <div className="flex space-x-6 py-2 items-center">
                      <img
                        className="w-16 h-16 rounded-md"
                        src={
                          item.profile_path
                            ? `https://image.tmdb.org/t/p/w600_and_h600_bestv2${item.profile_path}`
                            : `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`
                        }
                        alt="character name"
                      />
                      <div className="flex flex-col">
                        <p className="font-bold">{item.name}</p>
                        {item.roles.map((role, index) => (
                          <p key={index}>
                            {role.character}
                            <span className="pl-1 text-neutral-400">
                              ({role.episode_count} episodes)
                            </span>
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Crew */}
            <div className="col-span-1 px-8 sm:px-0">
              <h1 className="font-semibold text-secondary text-2xl pb-3">
                Crew{' '}
                <span className="font-normal text-neutral-500 pl-1">
                  {tvCast.data.crew.length}
                </span>
              </h1>

              {/* Production Crew */}
              <h4 className="pt-2 font-semibold text-md">Production</h4>
              {tvCast.data.crew.map(
                (item, index) =>
                  item.department === 'Production' && (
                    <div key={index}>
                      <div className="flex space-x-4 py-2 items-center">
                        <img
                          className="w-16 h-16 rounded-md"
                          src={
                            item.profile_path
                              ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.profile_path}`
                              : `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`
                          }
                          alt="character name"
                        />
                        <div className="flex flex-col">
                          <p className="font-bold">{item.name}</p>
                          {item.jobs.map((jobItem, index) => (
                            <p key={index}>
                              {jobItem.job}
                              <span className="pl-1 text-neutral-400">
                                ({jobItem.episode_count} episodes)
                              </span>
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
              )}

              {/* Art Crew */}
              <h4 className="pt-2 font-semibold text-md">Art</h4>
              {tvCast.data.crew.map(
                (item, index) =>
                  item.department === 'Art' && (
                    <div key={index}>
                      <div className="flex space-x-4 py-2 items-center">
                        <img
                          className="w-16 h-16 rounded-md"
                          src={
                            item.profile_path
                              ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.profile_path}`
                              : `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`
                          }
                          alt="character name"
                        />
                        <div className="flex flex-col">
                          <p className="font-bold">{item.name}</p>
                          {item.jobs.map((jobItem, index) => (
                            <p key={index}>
                              {jobItem.job}
                              <span className="pl-1 text-neutral-400">
                                ({jobItem.episode_count} episodes)
                              </span>
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
              )}

              {/* Camera Crew */}
              <h4 className="pt-2 font-semibold text-md">Camera</h4>
              {tvCast.data.crew.map(
                (item, index) =>
                  item.department === 'Camera' && (
                    <div key={index}>
                      <div className="flex space-x-4 py-2 items-center">
                        <img
                          className="w-16 h-16 rounded-md"
                          src={
                            item.profile_path
                              ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.profile_path}`
                              : `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`
                          }
                          alt="character name"
                        />
                        <div className="flex flex-col">
                          <p className="font-bold">{item.name}</p>
                          {item.jobs.map((jobItem, index) => (
                            <p key={index}>
                              {jobItem.job}
                              <span className="pl-1 text-neutral-400">
                                ({jobItem.episode_count} episodes)
                              </span>
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
              )}

              {/* Costume & Make-Up Crew */}
              <h4 className="pt-2 font-semibold text-md">Costume & Make-Up</h4>
              {tvCast.data.crew.map(
                (item, index) =>
                  item.department === 'Costume & Make-Up' && (
                    <div key={index}>
                      <div className="flex space-x-4 py-2 items-center">
                        <img
                          className="w-16 h-16 rounded-md"
                          src={
                            item.profile_path
                              ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.profile_path}`
                              : `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`
                          }
                          alt="character name"
                        />
                        <div className="flex flex-col">
                          <p className="font-bold">{item.name}</p>
                          {item.jobs.map((jobItem, index) => (
                            <p key={index}>
                              {jobItem.job}
                              <span className="pl-1 text-neutral-400">
                                ({jobItem.episode_count} episodes)
                              </span>
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
              )}

              {/* Crew */}
              <h4 className="pt-2 font-semibold text-md">Crew</h4>
              {tvCast.data.crew.map(
                (item, index) =>
                  item.department === 'Crew' && (
                    <div key={index}>
                      <div className="flex space-x-4 py-2 items-center">
                        <img
                          className="w-16 h-16 rounded-md"
                          src={
                            item.profile_path
                              ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.profile_path}`
                              : `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`
                          }
                          alt="character name"
                        />
                        <div className="flex flex-col">
                          <p className="font-bold">{item.name}</p>
                          {item.jobs.map((jobItem, index) => (
                            <p key={index}>
                              {jobItem.job}
                              <span className="pl-1 text-neutral-400">
                                ({jobItem.episode_count} episodes)
                              </span>
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
              )}

              {/* Directing Crew */}
              <h4 className="pt-2 font-semibold text-md">Directing</h4>
              {tvCast.data.crew.map(
                (item, index) =>
                  item.department === 'Directing' && (
                    <div key={index}>
                      <div className="flex space-x-4 py-2 items-center">
                        <img
                          className="w-16 h-16 rounded-md"
                          src={
                            item.profile_path
                              ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.profile_path}`
                              : `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`
                          }
                          alt="character name"
                        />
                        <div className="flex flex-col">
                          <p className="font-bold">{item.name}</p>
                          {item.jobs.map((jobItem, index) => (
                            <p key={index}>
                              {jobItem.job}
                              <span className="pl-1 text-neutral-400">
                                ({jobItem.episode_count} episodes)
                              </span>
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
              )}

              {/* Editing Crew */}
              <h4 className="pt-2 font-semibold text-md">Editing</h4>
              {tvCast.data.crew.map(
                (item, index) =>
                  item.department === 'Editing' && (
                    <div key={index}>
                      <div className="flex space-x-4 py-2 items-center">
                        <img
                          className="w-16 h-16 rounded-md"
                          src={
                            item.profile_path
                              ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.profile_path}`
                              : `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`
                          }
                          alt="character name"
                        />
                        <div className="flex flex-col">
                          <p className="font-bold">{item.name}</p>
                          {item.jobs.map((jobItem, index) => (
                            <p key={index}>
                              {jobItem.job}
                              <span className="pl-1 text-neutral-400">
                                ({jobItem.episode_count} episodes)
                              </span>
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
              )}

              {/* Sound Crew */}
              <h4 className="pt-2 font-semibold text-md">Sound</h4>
              {tvCast.data.crew.map(
                (item, index) =>
                  item.department === 'Sound' && (
                    <div key={index}>
                      <div className="flex space-x-4 py-2 items-center">
                        <img
                          className="w-16 h-16 rounded-md"
                          src={
                            item.profile_path
                              ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.profile_path}`
                              : `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`
                          }
                          alt="character name"
                        />
                        <div className="flex flex-col">
                          <p className="font-bold">{item.name}</p>
                          {item.jobs.map((jobItem, index) => (
                            <p key={index}>
                              {jobItem.job}
                              <span className="pl-1 text-neutral-400">
                                ({jobItem.episode_count} episodes)
                              </span>
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
              )}

              {/* Visual Effects Crew */}
              <h4 className="pt-2 font-semibold text-md">Visual Effects</h4>
              {tvCast.data.crew.map(
                (item, index) =>
                  item.department === 'Visual Effects' && (
                    <div key={index}>
                      <div className="flex space-x-4 py-2 items-center">
                        <img
                          className="w-16 h-16 rounded-md"
                          src={
                            item.profile_path
                              ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.profile_path}`
                              : `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`
                          }
                          alt="character name"
                        />
                        <div className="flex flex-col">
                          <p className="font-bold">{item.name}</p>
                          {item.jobs.map((jobItem, index) => (
                            <p key={index}>
                              {jobItem.job}
                              <span className="pl-1 text-neutral-400">
                                ({jobItem.episode_count} episodes)
                              </span>
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
              )}

              {/* Writing Crew */}
              <h4 className="pt-2 font-semibold text-md">Writing</h4>
              {tvCast.data.crew.map(
                (item, index) =>
                  item.department === 'Writing' && (
                    <div key={index}>
                      <div className="flex space-x-4 py-2 items-center">
                        <img
                          className="w-16 h-16 rounded-md"
                          src={
                            item.profile_path
                              ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.profile_path}`
                              : `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`
                          }
                          alt="character name"
                        />
                        <div className="flex flex-col">
                          <p className="font-bold">{item.name}</p>
                          {item.jobs.map((jobItem, index) => (
                            <p key={index}>
                              {jobItem.job}
                              <span className="pl-1 text-neutral-400">
                                ({jobItem.episode_count} episodes)
                              </span>
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default CastScreen;
