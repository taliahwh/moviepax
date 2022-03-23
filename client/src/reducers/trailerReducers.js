import {
  TV_ON_AIR_REQUEST,
  TV_ON_AIR_SUCCESS,
  TV_ON_AIR_FAILURE,
  TV_TRAILER_ONE_REQUEST,
  TV_TRAILER_ONE_SUCCESS,
  TV_TRAILER_ONE_FAILURE,
} from '../constants/trailerConstants';

export const tvOnAirReducer = (state = { tvOnAir: [] }, action) => {
  switch (action.type) {
    case TV_ON_AIR_REQUEST:
      return { loading: true, trendingToday: [] };
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
      return { loading: false, success: true, trailerOne: action.payload };
    case TV_TRAILER_ONE_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
