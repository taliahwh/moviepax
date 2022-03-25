import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = () => {
  return (
    <Link to="/:id" className="flex flex-col w-44 ">
      <div>
        <img
          className="w-40 rounded-lg mx-1"
          src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jtnfNzqZwN4E32FGGxx1YZaBWWf.jpg"
          alt="movie cover"
        />
        <div className="rounded-full w-12 h-12 bg-secondary relative left-4 bottom-7 outline outline-offset-0">
          <p className="text-white font-medium relative left-2.5 top-3 ">
            84<span className="text-xs font-semibold">%</span>
          </p>
        </div>
      </div>

      <div className="relative bottom-6">
        <p className="font-semibold text-lg px-3">Euphoria</p>
        <p className="font-light text-md text-gray-500 px-3">Feb 04, 2022</p>
      </div>
    </Link>
  );
};

export default MovieCard;
