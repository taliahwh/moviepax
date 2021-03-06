import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import banner from '../assets/the_wire_banner.png';

const HomeSearchSection = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const pageNumber = 1;

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(
      `/search/movie/query=${query.replace(/\s/g, '+')}/page/${pageNumber}`
    );
  };

  return (
    <div
      className="h-[22.5rem] mx-auto max-w-8xl bg-cover hero-pattern"
      style={{
        backgroundImage: `linear-gradient(100deg, rgba(43, 37, 37, 0.92) 38%, rgba(250, 202, 12, 0.9)), url(${banner})`,
      }}
    >
      {/* Content Area */}
      <div className="px-8 pt-12 pb-6 sm:py-12 sm:px-10 md:px-20 flex flex-col space-y-10">
        {/* Welcome header */}
        <div className="pt-4 sm:pt-10">
          <h1 className="font-semibold text-5xl text-white pb-1">Welcome.</h1>
          <h2 className="font-medium text-3xl text-white leading-10">
            Millions of movies, TV shows and people to discover. Explore now.
          </h2>
        </div>

        {/* Search bar */}
        <form className="flex" action="submit" onSubmit={handleSubmit}>
          <div className="flex rounded-full">
            <input
              type="text"
              id="query"
              className="px-4 py-2 text-gray-600 w-60 sm:w-96 md:w-[34rem] lg:w-[46rem] rounded-l-full"
              placeholder="Search for a movie, tv show, or person..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              type="submit"
              className="flex items-center justify-center px-4 text-white font-semibold bg-secondary hover:bg-[#3b3333] transition-colors duration-150 rounded-r-full"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomeSearchSection;
