import {
  TRENDING_TODAY_REQUEST,
  TRENDING_TODAY_SUCCESS,
  TRENDING_TODAY_FAILURE,
  TRENDING_THIS_WEEK_REQUEST,
  TRENDING_THIS_WEEK_SUCCESS,
  TRENDING_THIS_WEEK_FAILURE,
  POPULAR_STREAMING_REQUEST,
  POPULAR_STREAMING_SUCCESS,
  POPULAR_STREAMING_FAILURE,
  MOVIE_DETAILS_REQUEST,
  MOVIE_DETAILS_SUCCESS,
  MOVIE_DETAILS_FAILURE,
  MOVIE_CAST_REQUEST,
  MOVIE_CAST_SUCCESS,
  MOVIE_CAST_FAILURE,
  MOVIE_KEYWORDS_REQUEST,
  MOVIE_KEYWORDS_SUCCESS,
  MOVIE_KEYWORDS_FAILURE,
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

export const popularStreamingReducer = (
  state = { popularStreaming: [] },
  action
) => {
  switch (action.type) {
    case POPULAR_STREAMING_REQUEST:
      return { loading: true, popularStreaming: [] };
    case POPULAR_STREAMING_SUCCESS:
      return {
        loading: false,
        success: true,
        popularStreaming: action.payload,
      };
    case POPULAR_STREAMING_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// -------------------------------------- Movie Reducers

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
