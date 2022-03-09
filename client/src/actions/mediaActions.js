import axios from 'axios';

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
  ACTOR_DETAILS_REQUEST,
  ACTOR_DETAILS_SUCCESS,
  ACTOR_DETAILS_FAILURE,
  ACTOR_CREDITS_REQUEST,
  ACTOR_CREDITS_SUCCESS,
  ACTOR_CREDITS_FAILURE,
  MOVIE_CAST_REQUEST,
  MOVIE_CAST_SUCCESS,
  MOVIE_CAST_FAILURE,
  MOVIE_KEYWORDS_REQUEST,
  MOVIE_KEYWORDS_SUCCESS,
  MOVIE_KEYWORDS_FAILURE,
} from '../constants/mediaContstants';

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

export const getTrendingToday = () => async (dispatch) => {
  try {
    dispatch({ type: TRENDING_TODAY_REQUEST });

    const { data } = await axios.get(
      `${TMDB_BASE_URL}/trending/all/day?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    );

    dispatch({ type: TRENDING_TODAY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: TRENDING_TODAY_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getTrendingThisWeek = () => async (dispatch) => {
  try {
    dispatch({ type: TRENDING_THIS_WEEK_REQUEST });

    const { data } = await axios.get(
      `${TMDB_BASE_URL}/trending/all/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    );

    dispatch({ type: TRENDING_THIS_WEEK_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: TRENDING_THIS_WEEK_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getPopularStreaming = () => async (dispatch) => {
  try {
    dispatch({ type: POPULAR_STREAMING_REQUEST });

    const { data } = await axios.get(
      `${TMDB_BASE_URL}/tv/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    );

    dispatch({ type: POPULAR_STREAMING_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: POPULAR_STREAMING_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getActorDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: ACTOR_DETAILS_REQUEST });
    dispatch({ type: ACTOR_CREDITS_REQUEST });

    const detailsData = await axios.get(
      `${TMDB_BASE_URL}/person/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    );

    const creditsData = await axios.get(
      `${TMDB_BASE_URL}/person/${id}/combined_credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    );

    dispatch({ type: ACTOR_DETAILS_SUCCESS, payload: detailsData });
    dispatch({ type: ACTOR_CREDITS_SUCCESS, payload: creditsData });
  } catch (error) {
    dispatch({
      type: ACTOR_DETAILS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch({
      type: ACTOR_CREDITS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// -------------------------------------- Movie/Show Details

export const getMovieDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_DETAILS_REQUEST });
    dispatch({ type: MOVIE_CAST_REQUEST });
    dispatch({ type: MOVIE_KEYWORDS_REQUEST });

    const detailsData = await axios.get(
      `${TMDB_BASE_URL}/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    );

    const castData = await axios.get(
      `${TMDB_BASE_URL}/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    );

    const keywordsData = await axios.get(
      `${TMDB_BASE_URL}/movie/${id}/keywords?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    );

    dispatch({ type: MOVIE_DETAILS_SUCCESS, payload: detailsData });
    dispatch({ type: MOVIE_CAST_SUCCESS, payload: castData });
    dispatch({ type: MOVIE_KEYWORDS_SUCCESS, payload: keywordsData });
  } catch (error) {
    dispatch({
      type: MOVIE_DETAILS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch({
      type: MOVIE_CAST_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch({
      type: MOVIE_KEYWORDS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
