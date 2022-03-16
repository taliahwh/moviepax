import React from 'react';

import SearchResultsCard from '../components/Search/SearchResults';
import MediaCard from '../components/Search/MediaCard';
import PeopleCard from '../components/Search/PeopleCard';

const SearchScreen = () => {
  return (
    <div className="flex flex-col space-y-5 md:space-y-8 h-full mx-auto ">
      {/* Search Bar */}
      <div className="flex items-center mx-auto w-full bg-stone-400 h-full max-w-8xl mb-10">
        <input
          className="w-full border-stone-600 italic focus:outline-none focus:border-stone-500 focus:ring-stone-500"
          type="text"
          name="search-bar"
          id="search-bar"
          placeholder="Search for a movie, tv show, person..."
        />
      </div>
      {/* py-2 sm:px-10 md:px-0 max-w-8xl  */}
      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-10 gap-5 px-10 max-w-8xl mx-auto w-full">
        {/* Search Results */}
        <div className="col-span-1 md:col-span-3 h-full">
          <SearchResultsCard />
        </div>
        {/* Media Cards */}
        <div className="col-span-1 md:col-span-7  h-full flex flex-col space-y-5">
          {/* <PeopleCard /> */}
          <MediaCard />
          <MediaCard />
          <MediaCard />
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
