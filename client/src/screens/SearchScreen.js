import React, { useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import SearchResultsCard from '../components/Search/SearchResults';
import MediaCard from '../components/Search/MediaCard';
import PeopleCard from '../components/Search/PeopleCard';
import Footer from '../components/Footer';

import { searchAll, searchMovies } from '../actions/searchActions';
// import { SEARCH_ALL_FAILURE } from '../constants/searchConstants';

const SearchScreen = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { query } = useParams();

  const {
    loading: loadingSearchAll,
    success: successSearchAll,
    error: errorSearchAll,
    searchAllResults,
    page,
    pages,
    totalResults,
  } = useSelector((state) => state.searchAll);

  const {
    loading: loadingSearchMovies,
    success: successSearchMovies,
    error: errorSearchMovies,
    searchMoviesResults,
    page: searchMoviesPage,
    pages: searchMoviesPages,
    totalResults: searchMoviesTotalResults,
  } = useSelector((state) => state.searchMovies);

  useEffect(() => {
    dispatch(searchMovies(query));
  }, [dispatch, query]);

  return (
    <div className="flex flex-col space-y-5 md:space-y-8 h-full mx-auto">
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
        {successSearchAll && (
          <div className="col-span-1 md:col-span-3 h-full">
            <SearchResultsCard results={searchAllResults} />
          </div>
        )}
        {/* Media Cards */}
        <div className="col-span-1 md:col-span-7  h-full flex flex-col space-y-5">
          {/* <PeopleCard /> */}
          {successSearchMovies &&
            searchMoviesResults.map((result, index) => (
              <div key={index}>
                <MediaCard result={result} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
