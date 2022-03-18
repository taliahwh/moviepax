import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const OverviewHeader = ({ item }) => {
  const time_convert = (num) => {
    const hours = Math.floor(num / 60);
    const minutes = num % 60;
    return `${hours}h ${minutes}m`;
  };

  return (
    <div
      className="h-[56rem] sm:h-[38rem] md:h-[36rem] mx-auto max-w-8xl bg-cover shadow-md hero-pattern"
      style={{
        backgroundImage: `linear-gradient(100deg, rgba(43, 37, 37, 0.92) 38%, rgba(43, 37, 37, 0.92)), url(https://www.themoviedb.org/t/p/w600_and_h600_bestv2${item.backdrop_path})`,
      }}
    >
      {/* Content Area */}
      <div className="px-8 pt-8 pb-6 sm:px-10 md:px-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-11 gap-4">
        <div className="col-span-1 sm:col-span-1 md:col-span-3 h-full">
          <Link to={'/'} className="font-medium text-neutral-300">
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="text-neutral-300 pr-1 text-sm"
            />
            Back to Home
          </Link>
          <img
            className="h-[20rem] md:h-[30rem] rounded-lg m-auto"
            src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.poster_path}`}
            alt="movie poster"
          />
        </div>
        <div className="col-span-1 sm:col-span-2 md:col-span-8 flex flex-col pl-6 py-4 sm:py-14 ">
          {item.title && (
            <h1 className="text-white text-4xl font-semibold pb-1">
              {item.title}{' '}
              <span className="font-normal text-gray-300">
                ({moment(item.release_date).format('YYYY')})
              </span>
            </h1>
          )}
          {item.name && (
            <h1 className="text-white text-4xl font-semibold pb-1">
              {item.name}{' '}
              <span className="font-normal text-gray-300">
                ({moment(item.release_date).format('YYYY')})
              </span>
            </h1>
          )}

          <div className="flex space-x-3 text-white">
            <p className="font-light border-1 text-gray-300 border-gray-300 px-1">
              TV-MA
            </p>
            {/* TODO Map over genres and list them */}
            {item.genres &&
              item.genres.map((genre, index) => (
                <p key={index}>{genre.name}</p>
              ))}

            {item.runtime && (
              <>
                <p>•</p>
                <p>{time_convert(Number(item.runtime))}</p>
              </>
            )}
          </div>

          <div className="pt-8 flex space-x-1 sm:space-x-4 items-center">
            <div className="rounded-full w-12 h-12 bg-secondary outline outline-offset-0 outline-green-500">
              <p className="text-white font-semibold relative left-2.5 top-3 ">
                {item.vote_average * 10}
                <span className="text-xs font-semibold">%</span>
              </p>
            </div>

            <button className="flex items-center">
              <FontAwesomeIcon
                icon={faPlay}
                className="text-white fa-sm bg-secondary
                  rounded-full p-4"
              />{' '}
              <span className="font-medium text-white ml-2 invisible md:visible">
                Play Trailer
              </span>
            </button>
          </div>

          <h3 className="py-5 text-base italic text-gray-400">
            {item.tagline}
          </h3>
          {item.overview && (
            <>
              {' '}
              <h4 className="py-1 font-medium text-xl text-white">Overview</h4>
              <p className="text-base font-light text-white">{item.overview}</p>
            </>
          )}
          {item.creator && (
            <>
              {' '}
              <h4 className="pt-6 font-semibold text-md text-white">
                {item.creator}
              </h4>
              <p className="font-light text-white">Creator</p>
            </>
          )}
          {item.created_by && (
            <>
              {' '}
              {/* <h4 className="pt-6 font-semibold text-md text-white">
                {item.created_by[0].name || '-'}
              </h4> */}
              <p className="font-light text-white">Creator</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OverviewHeader;
