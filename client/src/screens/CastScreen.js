import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import Footer from '../components/Footer';

import { getMovieDetails } from '../actions/mediaActions';

const CastScreen = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
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

  useEffect(() => {
    dispatch(getMovieDetails(id));
  }, [dispatch, id]);

  return (
    <div className="flex flex-col space-y-5 md:space-y-8 h-full mx-auto max-w-8xl">
      {successMovieDetails && successMovieCast && (
        <>
          {/* Title Section */}
          <div className="flex space-x-4 items-center bg-stone-600 h-full px-8 py-5 sm:px-10 md:px-12">
            <img
              className="w-16 h-22 rounded-md"
              src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg"
              alt="prop"
            />
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold text-white">
                {movieDetails.data.original_title}
                <span className="font-medium pl-1">
                  ({moment(movieDetails.data.release_date).format('YYYY')})
                </span>
              </h1>
              <Link to={`/${id}`} className="font-medium text-neutral-300">
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
              {movieCast.data.cast.map((item) => (
                <div key={item.id}>
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
              {movieCast.data.crew.map((item) => (
                <div key={Math.random().toString(36).substring(2, 5)}>
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
                      <p>{item.known_for_department}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default CastScreen;
