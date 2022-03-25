import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import moment from 'moment';

import stock_photo from '../../assets/stock_photo.png';

const MediaCard = ({ result }) => {
  const location = useLocation();
  return (
    <Link
      to={
        location.pathname.includes('/search/tv/')
          ? `/tv/${result.id}`
          : location.pathname.includes('/search/movie')
          ? `/movie/${result.id}`
          : '/'
      }
      className="h-36 bg-white w-full flex items-center space-x-4 rounded-md border-1 border-neutral-300 shadow-sm"
    >
      {result.poster_path ? (
        <img
          src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${result.poster_path}`}
          alt="movie poster"
          className="w-28 h-full bg-neutral-200 rounded-l-md"
        />
      ) : (
        <img
          src={stock_photo}
          alt="movie poster"
          className="w-28 h-full bg-neutral-200 rounded-l-md"
        />
      )}
      <div className="w-full flex flex-col ">
        <h1 className="text-lg sm:text-xl font-semibold">
          {result.original_title || result.original_name || result.name}
        </h1>
        {result.release_date && (
          <h4 className="text-sm sm:text-md text-[#999999]">
            {moment(result.release_date).format('MMM d, YYYY')}
          </h4>
        )}
        {result.first_air_date && (
          <h4 className="text-sm sm:text-md text-[#999999]">
            {moment(result.first_air_date).format('MMM d, YYYY')}
          </h4>
        )}
        <p className="mt-3 h-16 w-72 sm:w-full text-ellipsis overflow-hidden">
          {result.overview}
        </p>
      </div>
    </Link>
  );
};

export default MediaCard;
