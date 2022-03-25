import {
  TV_ON_AIR_REQUEST,
  TV_ON_AIR_SUCCESS,
  TV_ON_AIR_FAILURE,
  TV_TRAILER_ONE_REQUEST,
  TV_TRAILER_ONE_SUCCESS,
  TV_TRAILER_ONE_FAILURE,
  TV_TRAILER_TWO_REQUEST,
  TV_TRAILER_TWO_SUCCESS,
  TV_TRAILER_TWO_FAILURE,
  TV_TRAILER_THREE_REQUEST,
  TV_TRAILER_THREE_SUCCESS,
  TV_TRAILER_THREE_FAILURE,
  TV_TRAILER_FOUR_REQUEST,
  TV_TRAILER_FOUR_SUCCESS,
  TV_TRAILER_FOUR_FAILURE,
  TV_TRAILER_FIVE_REQUEST,
  TV_TRAILER_FIVE_SUCCESS,
  TV_TRAILER_FIVE_FAILURE,
  TV_TRAILER_SIX_REQUEST,
  TV_TRAILER_SIX_SUCCESS,
  TV_TRAILER_SIX_FAILURE,
  TV_TRAILER_SEVEN_REQUEST,
  TV_TRAILER_SEVEN_SUCCESS,
  TV_TRAILER_SEVEN_FAILURE,
  TV_TRAILER_EIGHT_REQUEST,
  TV_TRAILER_EIGHT_SUCCESS,
  TV_TRAILER_EIGHT_FAILURE,
  TV_TRAILER_NINE_REQUEST,
  TV_TRAILER_NINE_SUCCESS,
  TV_TRAILER_NINE_FAILURE,
  MOVIES_NOW_PLAYING_REQUEST,
  MOVIES_NOW_PLAYING_SUCCESS,
  MOVIES_NOW_PLAYING_FAILURE,
  MOVIE_TRAILER_ONE_REQUEST,
  MOVIE_TRAILER_ONE_SUCCESS,
  MOVIE_TRAILER_ONE_FAILURE,
  MOVIE_TRAILER_TWO_REQUEST,
  MOVIE_TRAILER_TWO_SUCCESS,
  MOVIE_TRAILER_THREE_REQUEST,
  MOVIE_TRAILER_THREE_SUCCESS,
  MOVIE_TRAILER_FOUR_REQUEST,
  MOVIE_TRAILER_FOUR_SUCCESS,
  MOVIE_TRAILER_FIVE_REQUEST,
  MOVIE_TRAILER_FIVE_SUCCESS,
  MOVIE_TRAILER_SIX_REQUEST,
  MOVIE_TRAILER_SIX_SUCCESS,
  MOVIE_TRAILER_SEVEN_REQUEST,
  MOVIE_TRAILER_SEVEN_SUCCESS,
  MOVIE_TRAILER_EIGHT_REQUEST,
  MOVIE_TRAILER_EIGHT_SUCCESS,
  MOVIE_TRAILER_NINE_REQUEST,
  MOVIE_TRAILER_NINE_SUCCESS,
  MOVIE_TRAILER_TWO_FAILURE,
  MOVIE_TRAILER_THREE_FAILURE,
  MOVIE_TRAILER_FOUR_FAILURE,
  MOVIE_TRAILER_FIVE_FAILURE,
  MOVIE_TRAILER_SIX_FAILURE,
  MOVIE_TRAILER_SEVEN_FAILURE,
  MOVIE_TRAILER_EIGHT_FAILURE,
  MOVIE_TRAILER_NINE_FAILURE,
  MOVIES_TRAILERS_REQUEST,
  MOVIES_TRAILERS_SUCCESS,
  MOVIES_TRAILERS_FAILURE,
  TV_TRAILERS_REQUEST,
  TV_TRAILERS_SUCCESS,
  TV_TRAILERS_FAILURE,
} from '../constants/trailerConstants';

export const tvTrailersReducer = (state = {}, action) => {
  switch (action.type) {
    case TV_TRAILERS_REQUEST:
      return { loading: true };
    case TV_TRAILERS_SUCCESS:
      return { loading: false, success: true };
    case TV_TRAILERS_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const tvOnAirReducer = (state = { tvOnAir: [] }, action) => {
  switch (action.type) {
    case TV_ON_AIR_REQUEST:
      return { loading: true, tvOnAir: [] };
    case TV_ON_AIR_SUCCESS:
      return { loading: false, success: true };
    case TV_ON_AIR_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const tvTrailerOneReducer = (state = {}, action) => {
  switch (action.type) {
    case TV_TRAILER_ONE_REQUEST:
      return { loading: true };
    case TV_TRAILER_ONE_SUCCESS:
      return { loading: false, success: true, tvTrailerOne: action.payload };
    case TV_TRAILER_ONE_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const tvTrailerTwoReducer = (state = {}, action) => {
  switch (action.type) {
    case TV_TRAILER_TWO_REQUEST:
      return { loading: true };
    case TV_TRAILER_TWO_SUCCESS:
      return { loading: false, success: true, tvTrailerTwo: action.payload };
    case TV_TRAILER_TWO_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const tvTrailerThreeReducer = (state = {}, action) => {
  switch (action.type) {
    case TV_TRAILER_THREE_REQUEST:
      return { loading: true };
    case TV_TRAILER_THREE_SUCCESS:
      return { loading: false, success: true, tvTrailerThree: action.payload };
    case TV_TRAILER_THREE_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const tvTrailerFourReducer = (state = {}, action) => {
  switch (action.type) {
    case TV_TRAILER_FOUR_REQUEST:
      return { loading: true };
    case TV_TRAILER_FOUR_SUCCESS:
      return { loading: false, success: true, tvTrailerFour: action.payload };
    case TV_TRAILER_FOUR_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const tvTrailerFiveReducer = (state = {}, action) => {
  switch (action.type) {
    case TV_TRAILER_FIVE_REQUEST:
      return { loading: true };
    case TV_TRAILER_FIVE_SUCCESS:
      return { loading: false, success: true, tvTrailerFive: action.payload };
    case TV_TRAILER_FIVE_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const tvTrailerSixReducer = (state = {}, action) => {
  switch (action.type) {
    case TV_TRAILER_SIX_REQUEST:
      return { loading: true };
    case TV_TRAILER_SIX_SUCCESS:
      return { loading: false, success: true, tvTrailerSix: action.payload };
    case TV_TRAILER_SIX_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const tvTrailerSevenReducer = (state = {}, action) => {
  switch (action.type) {
    case TV_TRAILER_SEVEN_REQUEST:
      return { loading: true };
    case TV_TRAILER_SEVEN_SUCCESS:
      return { loading: false, success: true, tvTrailerSeven: action.payload };
    case TV_TRAILER_SEVEN_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const tvTrailerEightReducer = (state = {}, action) => {
  switch (action.type) {
    case TV_TRAILER_EIGHT_REQUEST:
      return { loading: true };
    case TV_TRAILER_EIGHT_SUCCESS:
      return { loading: false, success: true, tvTrailerEight: action.payload };
    case TV_TRAILER_EIGHT_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const tvTrailerNineReducer = (state = {}, action) => {
  switch (action.type) {
    case TV_TRAILER_NINE_REQUEST:
      return { loading: true };
    case TV_TRAILER_NINE_SUCCESS:
      return { loading: false, success: true, tvTrailerNine: action.payload };
    case TV_TRAILER_NINE_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

/* ----------------------------------------------------------------------------------- */

export const moviesTrailersReducer = (state = {}, action) => {
  switch (action.type) {
    case MOVIES_TRAILERS_REQUEST:
      return { loading: true };
    case MOVIES_TRAILERS_SUCCESS:
      return { loading: false, success: true };
    case MOVIES_TRAILERS_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const moviesInTheatresReducer = (
  state = { moviesInTheatres: [] },
  action
) => {
  switch (action.type) {
    case MOVIES_NOW_PLAYING_REQUEST:
      return { loading: true, moviesInTheatres: [] };
    case MOVIES_NOW_PLAYING_SUCCESS:
      return { loading: false, success: true };
    case MOVIES_NOW_PLAYING_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const movieTrailerOneReducer = (state = {}, action) => {
  switch (action.type) {
    case MOVIE_TRAILER_ONE_REQUEST:
      return { loading: true };
    case MOVIE_TRAILER_ONE_SUCCESS:
      return { loading: false, success: true, movieTrailerOne: action.payload };
    case MOVIE_TRAILER_ONE_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const movieTrailerTwoReducer = (state = {}, action) => {
  switch (action.type) {
    case MOVIE_TRAILER_TWO_REQUEST:
      return { loading: true };
    case MOVIE_TRAILER_TWO_SUCCESS:
      return { loading: false, success: true, movieTrailerTwo: action.payload };
    case MOVIE_TRAILER_TWO_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const movieTrailerThreeReducer = (state = {}, action) => {
  switch (action.type) {
    case MOVIE_TRAILER_THREE_REQUEST:
      return { loading: true };
    case MOVIE_TRAILER_THREE_SUCCESS:
      return {
        loading: false,
        success: true,
        movieTrailerThree: action.payload,
      };
    case MOVIE_TRAILER_THREE_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const movieTrailerFourReducer = (state = {}, action) => {
  switch (action.type) {
    case MOVIE_TRAILER_FOUR_REQUEST:
      return { loading: true };
    case MOVIE_TRAILER_FOUR_SUCCESS:
      return {
        loading: false,
        success: true,
        movieTrailerFour: action.payload,
      };
    case MOVIE_TRAILER_FOUR_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const movieTrailerFiveReducer = (state = {}, action) => {
  switch (action.type) {
    case MOVIE_TRAILER_FIVE_REQUEST:
      return { loading: true };
    case MOVIE_TRAILER_FIVE_SUCCESS:
      return {
        loading: false,
        success: true,
        movieTrailerFive: action.payload,
      };
    case MOVIE_TRAILER_FIVE_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const movieTrailerSixReducer = (state = {}, action) => {
  switch (action.type) {
    case MOVIE_TRAILER_SIX_REQUEST:
      return { loading: true };
    case MOVIE_TRAILER_SIX_SUCCESS:
      return { loading: false, success: true, movieTrailerSix: action.payload };
    case MOVIE_TRAILER_SIX_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const movieTrailerSevenReducer = (state = {}, action) => {
  switch (action.type) {
    case MOVIE_TRAILER_SEVEN_REQUEST:
      return { loading: true };
    case MOVIE_TRAILER_SEVEN_SUCCESS:
      return {
        loading: false,
        success: true,
        movieTrailerSeven: action.payload,
      };
    case MOVIE_TRAILER_SEVEN_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const movieTrailerEightReducer = (state = {}, action) => {
  switch (action.type) {
    case MOVIE_TRAILER_EIGHT_REQUEST:
      return { loading: true };
    case MOVIE_TRAILER_EIGHT_SUCCESS:
      return {
        loading: false,
        success: true,
        movieTrailerEight: action.payload,
      };
    case MOVIE_TRAILER_EIGHT_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const movieTrailerNineReducer = (state = {}, action) => {
  switch (action.type) {
    case MOVIE_TRAILER_NINE_REQUEST:
      return { loading: true };
    case MOVIE_TRAILER_NINE_SUCCESS:
      return {
        loading: false,
        success: true,
        movieTrailerNine: action.payload,
      };
    case MOVIE_TRAILER_NINE_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
