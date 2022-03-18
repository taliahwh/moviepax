import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const SearchResultsCard = ({ movieResults, tvResults, peopleResults }) => {
  const { query } = useParams();

  return (
    <div className="rounded-md border-neutral-300 border-1 flex flex-col">
      <div className="h-16 bg-[#4d4242] rounded-t-md">
        <h1 className="text-white text-xl font-medium px-5 py-5 flex">
          Search Results
        </h1>
      </div>
      <Link
        to={`/search/movie/query=${query}`}
        className="font-semibold flex justify-between bg-neutral-200 py-3 pl-5 pr-6  hover:bg-neutral-200"
      >
        Movies
        <p className=" rounded-lg px-2 font-normal bg-white">{movieResults}</p>
      </Link>

      <Link
        to={`/search/tv/query=${query}`}
        className="flex justify-between bg-white py-3 pl-5 pr-6  hover:bg-neutral-200"
      >
        TV Shows
        <p className="bg-neutral-200 rounded-lg px-2 font-normal ">
          {tvResults}
        </p>
      </Link>

      <Link
        to={`/search/person/query=${query}`}
        className="flex justify-between bg-white py-3 pl-5 pr-6  hover:bg-neutral-200"
      >
        People
        <p className="bg-neutral-200 rounded-lg px-2 font-normal ">
          {peopleResults}
        </p>
      </Link>
    </div>
  );
};

export default SearchResultsCard;
