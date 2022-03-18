import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import SearchResultsCard from '../components/Search/SearchResultsCard';
import MediaCard from '../components/Search/MediaCard';
import PeopleCard from '../components/Search/PeopleCard';
import Footer from '../components/Footer';

import {
  searchAll,
  searchMovies,
  searchTV,
  searchPeople,
} from '../actions/searchActions';

const SearchScreen = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const {
    loading: loadingSearchMovies,
    success: successSearchMovies,
    error: errorSearchMovies,
    searchMoviesResults,
    page: searchMoviesPage,
    pages: searchMoviesPages,
    totalResults: searchMoviesTotalResults,
  } = useSelector((state) => state.searchMovies);

  const {
    loading: loadingSearchTV,
    success: successSearchTV,
    error: errorSearchTV,
    searchTVResults,
    page: searchTVPage,
    pages: searchTVPages,
    totalResults: searchTVTotalResults,
  } = useSelector((state) => state.searchTV);

  const {
    loading: loadingSearchPeople,
    success: successSearchPeople,
    error: errorSearchPeople,
    searchPeopleResults,
    page: searchPeoplePage,
    pages: searchPeoplePages,
    totalResults: searchPeopleTotalResults,
  } = useSelector((state) => state.searchPeople);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(searchAll(query.replace(/\s/g, '+')));
    dispatch(searchMovies(query.replace(/\s/g, '+')));
    dispatch(searchTV(query.replace(/\s/g, '+')));
    dispatch(searchPeople(query.replace(/\s/g, '+')));
    // console.log(query.replace(/\s/g, '+'));
    navigate(`/search/movie/query=${query.replace(/\s/g, '+')}`);
  };

  return (
    <div className="flex flex-col space-y-5 md:space-y-8 h-full mx-auto">
      {/* Search Bar */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center mx-auto w-full bg-stone-400 h-full max-w-8xl mb-10"
      >
        <input
          className="w-full border-stone-600 italic focus:outline-none focus:border-stone-500 focus:ring-stone-500"
          type="text"
          name="search-bar"
          id="search-bar"
          placeholder="Search for a movie, tv show, person..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="hidden">
          Search
        </button>
      </form>
      {/* py-2 sm:px-10 md:px-0 max-w-8xl  */}
      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-10 gap-5 px-10 max-w-8xl mx-auto w-full">
        {/* Search Results */}
        {successSearchMovies && successSearchTV && (
          <div className="col-span-1 md:col-span-3 h-full">
            <SearchResultsCard
              movieResults={searchMoviesTotalResults}
              tvResults={searchTVTotalResults}
              peopleResults={searchPeopleTotalResults}
            />
          </div>
        )}
        {/* Media Cards */}
        <div className="col-span-1 md:col-span-7  h-full flex flex-col space-y-5">
          {location.pathname.includes('/search/movie') &&
            successSearchMovies &&
            searchMoviesResults.map((result, index) => (
              <div key={index}>
                <MediaCard result={result} />
              </div>
            ))}

          {location.pathname.includes('/search/tv') &&
            successSearchTV &&
            searchTVResults.map((result, index) => (
              <div key={index}>
                <MediaCard result={result} />
              </div>
            ))}

          {location.pathname.includes('/search/person') &&
            successSearchPeople &&
            searchPeopleResults.map((result, index) => (
              <div key={index}>
                <PeopleCard person={result} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
