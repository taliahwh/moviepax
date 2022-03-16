import React from 'react';
import { Link } from 'react-router-dom';

const MediaCard = () => {
  return (
    <Link
      to="/"
      className="h-36 bg-white w-full flex items-center space-x-4 rounded-md border-1 border-neutral-300 shadow-sm"
    >
      <img
        src="https://www.themoviedb.org/t/p/w94_and_h141_bestv2/qfIJOmsiBcum6EGosiy5gTF6ihk.jpg"
        alt="movie poster"
        className="w-28 bg-neutral-200 rounded-l-md"
      />
      <div className="w-full flex flex-col ">
        <h1 className="text-lg sm:text-xl font-semibold">Queen & Slim</h1>
        <h4 className="text-sm sm:text-md text-[#999999]">November 27, 2019</h4>
        <p className="mt-3 bg-blue-300 h-16 w-72 sm:w-full">
          While on a forgettable first date together in Ohio, a black man and a
          black woman are pulled over for a minor traffic infraction. The
          situation escalates, with sudden and tragic results.
        </p>
      </div>
    </Link>
  );
};

export default MediaCard;
