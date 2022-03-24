import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  trendingTodayReducer,
  trendingThisWeekReducer,
  popularTVReducer,
  popularMoviesReducer,
  movieDetailsReducer,
  movieCastReducer,
  movieKeywordsReducer,
  tvDetailsReducer,
  tvCastReducer,
  tvKeywordsReducer,
  actorDetailsReducer,
  actorCreditsReducer,
} from './reducers/mediaReducers';

import {
  searchAllReducer,
  searchMoviesReducer,
  searchPeopleReducer,
  searchTVReducer,
} from './reducers/searchReducers';

import {
  moviesInTheatresReducer,
  movieTrailerEightReducer,
  movieTrailerFiveReducer,
  movieTrailerFourReducer,
  movieTrailerNineReducer,
  movieTrailerOneReducer,
  movieTrailerSevenReducer,
  movieTrailerSixReducer,
  movieTrailerThreeReducer,
  movieTrailerTwoReducer,
  tvOnAirReducer,
  tvTrailerEightReducer,
  tvTrailerFiveReducer,
  tvTrailerFourReducer,
  tvTrailerNineReducer,
  tvTrailerOneReducer,
  tvTrailerSevenReducer,
  tvTrailerSixReducer,
  tvTrailerThreeReducer,
  tvTrailerTwoReducer,
} from './reducers/trailerReducers';

const reducer = combineReducers({
  trendingToday: trendingTodayReducer,
  trendingThisWeek: trendingThisWeekReducer,
  popularTV: popularTVReducer,
  popularMovies: popularMoviesReducer,
  actorDetails: actorDetailsReducer,
  actorCredits: actorCreditsReducer,
  movieDetails: movieDetailsReducer,
  movieCast: movieCastReducer,
  movieKeywords: movieKeywordsReducer,
  tvDetails: tvDetailsReducer,
  tvCast: tvCastReducer,
  tvKeywords: tvKeywordsReducer,
  searchAll: searchAllReducer,
  searchMovies: searchMoviesReducer,
  searchTV: searchTVReducer,
  searchPeople: searchPeopleReducer,
  tvOnAir: tvOnAirReducer,
  tvTrailerOne: tvTrailerOneReducer,
  tvTrailerTwo: tvTrailerTwoReducer,
  tvTrailerThree: tvTrailerThreeReducer,
  tvTrailerFour: tvTrailerFourReducer,
  tvTrailerFive: tvTrailerFiveReducer,
  tvTrailerSix: tvTrailerSixReducer,
  tvTrailerSeven: tvTrailerSevenReducer,
  tvTrailerEight: tvTrailerEightReducer,
  tvTrailerNine: tvTrailerNineReducer,
  movieInTheatres: moviesInTheatresReducer,
  movieTrailerOne: movieTrailerOneReducer,
  movieTrailerTwo: movieTrailerTwoReducer,
  movieTrailerThree: movieTrailerThreeReducer,
  movieTrailerFour: movieTrailerFourReducer,
  movieTrailerFive: movieTrailerFiveReducer,
  movieTrailerSix: movieTrailerSixReducer,
  movieTrailerSeven: movieTrailerSevenReducer,
  movieTrailerEight: movieTrailerEightReducer,
  movieTrailerNine: movieTrailerNineReducer,
});

// Initial loading when the redux store is loaded.
const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
