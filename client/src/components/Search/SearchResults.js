import React from 'react';
import { Link } from 'react-router-dom';

const SearchResults = ({ results }) => {
  const movieCount = results.filter((result) => result.media_type === 'movie');
  const tvCount = results.filter((result) => result.media_type === 'tv');
  const peopleCount = results.filter(
    (result) => result.known_for_department === 'Acting'
  );

  return (
    <div className="rounded-md border-neutral-300 border-1 flex flex-col">
      <div className="h-16 bg-[#4d4242] rounded-t-md">
        <h1 className="text-white text-xl font-medium px-5 py-5 flex">
          Search Results
        </h1>
      </div>
      <Link
        to="/"
        className="font-semibold flex justify-between bg-neutral-200 py-3 pl-5 pr-6  hover:bg-neutral-200"
      >
        Movies
        <p className=" rounded-lg px-2 font-normal bg-white">
          {movieCount.length}
        </p>
      </Link>

      <Link
        to="/"
        className="flex justify-between bg-white py-3 pl-5 pr-6  hover:bg-neutral-200"
      >
        TV Shows
        <p className="bg-neutral-200 rounded-lg px-2 font-normal ">
          {tvCount.length}
        </p>
      </Link>

      <Link
        to="/"
        className="flex justify-between bg-white py-3 pl-5 pr-6  hover:bg-neutral-200"
      >
        People
        <p className="bg-neutral-200 rounded-lg px-2 font-normal ">
          {peopleCount.length}
        </p>
      </Link>
    </div>
  );
};

export default SearchResults;
