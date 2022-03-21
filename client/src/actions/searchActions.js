import axios from 'axios';

import {
  SEARCH_ALL_REQUEST,
  SEARCH_ALL_SUCCESS,
  SEARCH_ALL_FAILURE,
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAILURE,
  SEARCH_TV_REQUEST,
  SEARCH_TV_SUCCESS,
  SEARCH_TV_FAILURE,
  SEARCH_PEOPLE_REQUEST,
  SEARCH_PEOPLE_SUCCESS,
  SEARCH_PEOPLE_FAILURE,
} from '../constants/searchConstants';

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

export const searchAll = (query) => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_ALL_REQUEST });

    const { data } = await axios.get(
      `${TMDB_BASE_URL}/search/multi?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${query}`
    );

    dispatch({ type: SEARCH_ALL_SUCCESS, payload: data });
    console.log('Search ALL');
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

export const searchTV = (query) => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_TV_REQUEST });

    const { data } = await axios.get(
      `${TMDB_BASE_URL}/search/tv?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${query}`
    );

    dispatch({ type: SEARCH_TV_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SEARCH_TV_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const searchPeople = (query) => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_PEOPLE_REQUEST });

    const { data } = await axios.get(
      `${TMDB_BASE_URL}/search/person?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${query}`
    );

    dispatch({ type: SEARCH_PEOPLE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SEARCH_PEOPLE_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
