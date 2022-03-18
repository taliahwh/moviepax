import axios from 'axios';

import {
  SEARCH_ALL_REQUEST,
  SEARCH_ALL_SUCCESS,
  SEARCH_ALL_FAILURE,
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAILURE,
} from '../constants/searchConstants';

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

export const searchAll = (query) => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_ALL_REQUEST });

    const { data } = await axios.get(
      `${TMDB_BASE_URL}/search/multi?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${query}`
    );

    dispatch({ type: SEARCH_ALL_SUCCESS, payload: data });
    console.log(data);
  } catch (error) {
    dispatch({
      type: SEARCH_ALL_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const searchMovies = (query) => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_MOVIES_REQUEST });

    const { data } = await axios.get(
      `${TMDB_BASE_URL}/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${query}`
    );

    dispatch({ type: SEARCH_MOVIES_SUCCESS, payload: data });
    console.log(data);
  } catch (error) {
    dispatch({
      type: SEARCH_MOVIES_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
