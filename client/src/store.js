import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  trendingTodayReducer,
  trendingThisWeekReducer,
  popularStreamingReducer,
  movieDetailsReducer,
  movieCastReducer,
  movieKeywordsReducer,
  actorDetailsReducer,
  actorCreditsReducer,
} from './reducers/mediaReducers';

const reducer = combineReducers({
  trendingToday: trendingTodayReducer,
  trendingThisWeek: trendingThisWeekReducer,
  popularStreaming: popularStreamingReducer,
  actorDetails: actorDetailsReducer,
  actorCredits: actorCreditsReducer,
  movieDetails: movieDetailsReducer,
  movieCast: movieCastReducer,
  movieKeywords: movieKeywordsReducer,
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
