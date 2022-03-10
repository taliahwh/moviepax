import {
  TRENDING_TODAY_REQUEST,
  TRENDING_TODAY_SUCCESS,
  TRENDING_TODAY_FAILURE,
  TRENDING_THIS_WEEK_REQUEST,
  TRENDING_THIS_WEEK_SUCCESS,
  TRENDING_THIS_WEEK_FAILURE,
  POPULAR_TV_REQUEST,
  POPULAR_TV_SUCCESS,
  POPULAR_TV_FAILURE,
  POPULAR_MOVIES_REQUEST,
  POPULAR_MOVIES_SUCCESS,
  POPULAR_MOVIES_FAILURE,
  MOVIE_DETAILS_REQUEST,
  MOVIE_DETAILS_SUCCESS,
  MOVIE_DETAILS_FAILURE,
  MOVIE_CAST_REQUEST,
  MOVIE_CAST_SUCCESS,
  MOVIE_CAST_FAILURE,
  MOVIE_KEYWORDS_REQUEST,
  MOVIE_KEYWORDS_SUCCESS,
  MOVIE_KEYWORDS_FAILURE,
  TV_DETAILS_REQUEST,
  TV_DETAILS_SUCCESS,
  TV_DETAILS_FAILURE,
  TV_CAST_REQUEST,
  TV_CAST_SUCCESS,
  TV_CAST_FAILURE,
  TV_KEYWORDS_REQUEST,
  TV_KEYWORDS_SUCCESS,
  TV_KEYWORDS_FAILURE,
  ACTOR_DETAILS_REQUEST,
  ACTOR_DETAILS_SUCCESS,
  ACTOR_DETAILS_FAILURE,
  ACTOR_CREDITS_REQUEST,
  ACTOR_CREDITS_SUCCESS,
  ACTOR_CREDITS_FAILURE,
} from '../constants/mediaContstants';

export const trendingTodayReducer = (state = { trendingToday: [] }, action) => {
  switch (action.type) {
    case TRENDING_TODAY_REQUEST:
      return { loading: true, trendingToday: [] };
    case TRENDING_TODAY_SUCCESS:
      return { loading: false, success: true, trendingToday: action.payload };
    case TRENDING_TODAY_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const trendingThisWeekReducer = (
  state = { trendingThisWeek: [] },
  action
) => {
  switch (action.type) {
    case TRENDING_THIS_WEEK_REQUEST:
      return { loading: true, trendingThisWeek: [] };
    case TRENDING_THIS_WEEK_SUCCESS:
      return {
        loading: false,
        success: true,
        trendingThisWeek: action.payload,
      };
    case TRENDING_THIS_WEEK_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const popularTVReducer = (state = { popularTV: [] }, action) => {
  switch (action.type) {
    case POPULAR_TV_REQUEST:
      return { loading: true, popularTV: [] };
    case POPULAR_TV_SUCCESS:
      return {
        loading: false,
        success: true,
        popularTV: action.payload,
      };
    case POPULAR_TV_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const popularMoviesReducer = (state = { popularMovies: [] }, action) => {
  switch (action.type) {
    case POPULAR_MOVIES_REQUEST:
      return { loading: true, popularTV: [] };
    case POPULAR_MOVIES_SUCCESS:
      return {
        loading: false,
        success: true,
        popularMovies: action.payload,
      };
    case POPULAR_MOVIES_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// -------------------------------------- Actor Reducers

export const actorDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTOR_DETAILS_REQUEST:
      return { loading: true };
    case ACTOR_DETAILS_SUCCESS:
      return {
        loading: false,
        success: true,
        actorDetails: action.payload,
      };
    case ACTOR_DETAILS_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const actorCreditsReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTOR_CREDITS_REQUEST:
      return { loading: true };
    case ACTOR_CREDITS_SUCCESS:
      return {
        loading: false,
        success: true,
        actorCredits: action.payload,
      };
    case ACTOR_CREDITS_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// -------------------------------------- Movie Reducers

export const movieDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case MOVIE_DETAILS_REQUEST:
      return { loading: true };
    case MOVIE_DETAILS_SUCCESS:
      return {
        loading: false,
        success: true,
        movieDetails: action.payload,
      };
    case MOVIE_DETAILS_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const movieCastReducer = (state = {}, action) => {
  switch (action.type) {
    case MOVIE_CAST_REQUEST:
      return { loading: true };
    case MOVIE_CAST_SUCCESS:
      return {
        loading: false,
        success: true,
        movieCast: action.payload,
      };
    case MOVIE_CAST_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const movieKeywordsReducer = (state = {}, action) => {
  switch (action.type) {
    case MOVIE_KEYWORDS_REQUEST:
      return { loading: true };
    case MOVIE_KEYWORDS_SUCCESS:
      return {
        loading: false,
        success: true,
        movieKeywords: action.payload,
      };
    case MOVIE_KEYWORDS_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// -------------------------------------- TV Reducers

export const tvDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case TV_DETAILS_REQUEST:
      return { loading: true };
    case TV_DETAILS_SUCCESS:
      return {
        loading: false,
        success: true,
        tvDetails: action.payload,
      };
    case TV_DETAILS_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const tvCastReducer = (state = {}, action) => {
  switch (action.type) {
    case TV_CAST_REQUEST:
      return { loading: true };
    case TV_CAST_SUCCESS:
      return {
        loading: false,
        success: true,
        tvCast: action.payload,
      };
    case TV_CAST_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const tvKeywordsReducer = (state = {}, action) => {
  switch (action.type) {
    case TV_KEYWORDS_REQUEST:
      return { loading: true };
    case TV_KEYWORDS_SUCCESS:
      return {
        loading: false,
        success: true,
        tvKeywords: action.payload,
      };
    case TV_KEYWORDS_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
