import axios from 'axios';

import {
  TV_ON_AIR_REQUEST,
  TV_ON_AIR_SUCCESS,
  TV_ON_AIR_FAILURE,
  TV_TRAILER_ONE_REQUEST,
  TV_TRAILER_ONE_SUCCESS,
  TV_TRAILER_ONE_FAILURE,
  TV_TRAILER_TWO_REQUEST,
  TV_TRAILER_TWO_SUCCESS,
  TV_TRAILER_THREE_REQUEST,
  TV_TRAILER_THREE_SUCCESS,
  TV_TRAILER_FOUR_REQUEST,
  TV_TRAILER_FOUR_SUCCESS,
  TV_TRAILER_FIVE_REQUEST,
  TV_TRAILER_FIVE_SUCCESS,
  TV_TRAILER_SIX_REQUEST,
  TV_TRAILER_SIX_SUCCESS,
  TV_TRAILER_SEVEN_REQUEST,
  TV_TRAILER_SEVEN_SUCCESS,
  TV_TRAILER_EIGHT_REQUEST,
  TV_TRAILER_EIGHT_SUCCESS,
  TV_TRAILER_NINE_REQUEST,
  TV_TRAILER_NINE_SUCCESS,
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
  MOVIES_TRAILERS_REQUEST,
  MOVIES_TRAILERS_SUCCESS,
  MOVIES_TRAILERS_FAILURE,
  TV_TRAILERS_REQUEST,
  TV_TRAILERS_SUCCESS,
  TV_TRAILERS_FAILURE,
  TV_TRAILER_TWO_FAILURE,
  TV_TRAILER_THREE_FAILURE,
  TV_TRAILER_FOUR_FAILURE,
  TV_TRAILER_FIVE_FAILURE,
  TV_TRAILER_SIX_FAILURE,
  TV_TRAILER_SEVEN_FAILURE,
  TV_TRAILER_EIGHT_FAILURE,
  TV_TRAILER_NINE_FAILURE,
  MOVIE_TRAILER_TWO_FAILURE,
  MOVIE_TRAILER_THREE_FAILURE,
  MOVIE_TRAILER_FOUR_FAILURE,
  MOVIE_TRAILER_FIVE_FAILURE,
  MOVIE_TRAILER_SIX_FAILURE,
  MOVIE_TRAILER_SEVEN_FAILURE,
  MOVIE_TRAILER_EIGHT_FAILURE,
  MOVIE_TRAILER_NINE_FAILURE,
} from '../constants/trailerConstants';

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

export const getTVTrailers = () => async (dispatch) => {
  try {
    dispatch({ type: TV_TRAILERS_REQUEST });

    dispatch({ type: TV_ON_AIR_REQUEST });

    const { data } = await axios.get(
      `${TMDB_BASE_URL}/tv/on_the_air?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=1`
    );

    dispatch({ type: TV_ON_AIR_SUCCESS });

    // Pull top 9 ids from results and store in new array
    const idList = [];
    data.results
      .slice(0, 9)
      .map((result) => idList.push({ id: result.id, title: result.name }));

    // console.log('TV');
    // console.log(idList);

    /* ---------------------------------------------------------------------------------------- */

    dispatch({ type: TV_TRAILER_ONE_REQUEST });

    const trailerOneData = await axios.get(
      `${TMDB_BASE_URL}/tv/${idList[0].id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    );
    trailerOneData.data.title = idList[0].title;

    dispatch({ type: TV_TRAILER_ONE_SUCCESS, payload: trailerOneData.data });
    // console.log(trailerOneData.data);

    /* ---------------------------------------------------------------------------------------- */

    dispatch({ type: TV_TRAILER_TWO_REQUEST });

    const trailerTwoData = await axios.get(
      `${TMDB_BASE_URL}/tv/${idList[1].id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    );
    trailerTwoData.data.title = idList[1].title;

    dispatch({ type: TV_TRAILER_TWO_SUCCESS, payload: trailerTwoData.data });

    /* ---------------------------------------------------------------------------------------- */

    dispatch({ type: TV_TRAILER_THREE_REQUEST });

    const trailerThreeData = await axios.get(
      `${TMDB_BASE_URL}/tv/${idList[2].id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    );
    trailerThreeData.data.title = idList[2].title;

    dispatch({
      type: TV_TRAILER_THREE_SUCCESS,
      payload: trailerThreeData.data,
    });
    // console.log(trailerTwoData.data);
    /* ---------------------------------------------------------------------------------------- */

    dispatch({ type: TV_TRAILER_FOUR_REQUEST });

    const trailerFourData = await axios.get(
      `${TMDB_BASE_URL}/tv/${idList[3].id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    );
    trailerFourData.data.title = idList[3].title;

    dispatch({
      type: TV_TRAILER_FOUR_SUCCESS,
      payload: trailerFourData.data,
    });

    /* ---------------------------------------------------------------------------------------- */

    dispatch({ type: TV_TRAILER_FIVE_REQUEST });

    const trailerFiveData = await axios.get(
      `${TMDB_BASE_URL}/tv/${idList[4].id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    );
    trailerFiveData.data.title = idList[4].title;

    dispatch({
      type: TV_TRAILER_FIVE_SUCCESS,
      payload: trailerFiveData.data,
    });

    /* ---------------------------------------------------------------------------------------- */

    dispatch({ type: TV_TRAILER_SIX_REQUEST });

    const trailerSixData = await axios.get(
      `${TMDB_BASE_URL}/tv/${idList[5].id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    );
    trailerSixData.data.title = idList[5].title;

    dispatch({
      type: TV_TRAILER_SIX_SUCCESS,
      payload: trailerSixData.data,
    });

    /* ---------------------------------------------------------------------------------------- */

    dispatch({ type: TV_TRAILER_SEVEN_REQUEST });

    const trailerSevenData = await axios.get(
      `${TMDB_BASE_URL}/tv/${idList[6].id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    );
    trailerSevenData.data.title = idList[6].title;

    dispatch({
      type: TV_TRAILER_SEVEN_SUCCESS,
      payload: trailerSevenData.data,
    });

    /* ---------------------------------------------------------------------------------------- */

    dispatch({ type: TV_TRAILER_EIGHT_REQUEST });

    const trailerEightData = await axios.get(
      `${TMDB_BASE_URL}/tv/${idList[7].id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    );
    trailerEightData.data.title = idList[7].title;

    dispatch({
      type: TV_TRAILER_EIGHT_SUCCESS,
      payload: trailerEightData.data,
    });

    /* ---------------------------------------------------------------------------------------- */

    dispatch({ type: TV_TRAILER_NINE_REQUEST });

    const trailerNineData = await axios.get(
      `${TMDB_BASE_URL}/tv/${idList[8].id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    );
    trailerNineData.data.title = idList[8].title;

    dispatch({
      type: TV_TRAILER_NINE_SUCCESS,
      payload: trailerNineData.data,
    });

    dispatch({ type: TV_TRAILERS_SUCCESS });

    /* ---------------------------------------------------------------------------------------- */
  } catch (error) {
    dispatch({
      type: TV_TRAILERS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch({
      type: TV_ON_AIR_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch({
      type: TV_TRAILER_ONE_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch({
      type: TV_TRAILER_TWO_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch({
      type: TV_TRAILER_THREE_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch({
      type: TV_TRAILER_FOUR_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch({
      type: TV_TRAILER_FIVE_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch({
      type: TV_TRAILER_SIX_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch({
      type: TV_TRAILER_SEVEN_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch({
      type: TV_TRAILER_EIGHT_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch({
      type: TV_TRAILER_NINE_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getMovieTrailers = () => async (dispatch) => {
  try {
    dispatch({ type: MOVIES_TRAILERS_REQUEST });

    dispatch({ type: MOVIES_NOW_PLAYING_REQUEST });

    const { data } = await axios.get(
      `${TMDB_BASE_URL}/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=1`
    );

    dispatch({ type: MOVIES_NOW_PLAYING_SUCCESS });

    // Pull top 9 ids from results and store in new array
    const idList = [];
    data.results
      .slice(0, 9)
      .map((result) => idList.push({ id: result.id, title: result.title }));
    // console.log(data);
    // console.log('Movies');
    // console.log(idList);

    /* ---------------------------------------------------------------------------------------- */

    dispatch({ type: MOVIE_TRAILER_ONE_REQUEST });

    const trailerOneData = await axios.get(
      `${TMDB_BASE_URL}/movie/${idList[0].id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    );
    trailerOneData.data.title = idList[0].title;

    dispatch({ type: MOVIE_TRAILER_ONE_SUCCESS, payload: trailerOneData.data });
    // console.log(trailerOneData.data);

    /* ---------------------------------------------------------------------------------------- */

    dispatch({ type: MOVIE_TRAILER_TWO_REQUEST });

    const trailerTwoData = await axios.get(
      `${TMDB_BASE_URL}/movie/${idList[1].id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    );
    trailerTwoData.data.title = idList[1].title;

    dispatch({ type: MOVIE_TRAILER_TWO_SUCCESS, payload: trailerTwoData.data });

    /* ---------------------------------------------------------------------------------------- */

    dispatch({ type: MOVIE_TRAILER_THREE_REQUEST });

    const trailerThreeData = await axios.get(
      `${TMDB_BASE_URL}/movie/${idList[2].id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    );
    trailerThreeData.data.title = idList[2].title;

    dispatch({
      type: MOVIE_TRAILER_THREE_SUCCESS,
      payload: trailerThreeData.data,
    });
    // console.log(trailerTwoData.data);
    /* ---------------------------------------------------------------------------------------- */

    dispatch({ type: MOVIE_TRAILER_FOUR_REQUEST });

    const trailerFourData = await axios.get(
      `${TMDB_BASE_URL}/movie/${idList[3].id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    );
    trailerFourData.data.title = idList[3].title;

    dispatch({
      type: MOVIE_TRAILER_FOUR_SUCCESS,
      payload: trailerFourData.data,
    });

    /* ---------------------------------------------------------------------------------------- */

    dispatch({ type: MOVIE_TRAILER_FIVE_REQUEST });

    const trailerFiveData = await axios.get(
      `${TMDB_BASE_URL}/movie/${idList[4].id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    );
    trailerFiveData.data.title = idList[4].title;

    dispatch({
      type: MOVIE_TRAILER_FIVE_SUCCESS,
      payload: trailerFiveData.data,
    });

    /* ---------------------------------------------------------------------------------------- */

    dispatch({ type: MOVIE_TRAILER_SIX_REQUEST });

    const trailerSixData = await axios.get(
      `${TMDB_BASE_URL}/movie/${idList[5].id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    );
    trailerSixData.data.title = idList[5].title;

    dispatch({
      type: MOVIE_TRAILER_SIX_SUCCESS,
      payload: trailerSixData.data,
    });

    /* ---------------------------------------------------------------------------------------- */

    dispatch({ type: MOVIE_TRAILER_SEVEN_REQUEST });

    const trailerSevenData = await axios.get(
      `${TMDB_BASE_URL}/movie/${idList[6].id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    );
    trailerSevenData.data.title = idList[6].title;

    dispatch({
      type: MOVIE_TRAILER_SEVEN_SUCCESS,
      payload: trailerSevenData.data,
    });

    /* ---------------------------------------------------------------------------------------- */

    dispatch({ type: MOVIE_TRAILER_EIGHT_REQUEST });

    const trailerEightData = await axios.get(
      `${TMDB_BASE_URL}/movie/${idList[7].id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    );
    trailerEightData.data.title = idList[7].title;

    dispatch({
      type: MOVIE_TRAILER_EIGHT_SUCCESS,
      payload: trailerEightData.data,
    });

    /* ---------------------------------------------------------------------------------------- */

    dispatch({ type: MOVIE_TRAILER_NINE_REQUEST });

    const trailerNineData = await axios.get(
      `${TMDB_BASE_URL}/movie/${idList[8].id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    );
    trailerNineData.data.title = idList[8].title;

    dispatch({
      type: MOVIE_TRAILER_NINE_SUCCESS,
      payload: trailerNineData.data,
    });

    dispatch({ type: MOVIES_TRAILERS_SUCCESS });

    /* ---------------------------------------------------------------------------------------- */
  } catch (error) {
    dispatch({
      type: MOVIES_TRAILERS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch({
      type: MOVIES_NOW_PLAYING_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch({
      type: MOVIE_TRAILER_ONE_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch({
      type: MOVIE_TRAILER_TWO_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch({
      type: MOVIE_TRAILER_THREE_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch({
      type: MOVIE_TRAILER_FOUR_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch({
      type: MOVIE_TRAILER_FIVE_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch({
      type: MOVIE_TRAILER_SIX_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch({
      type: MOVIE_TRAILER_SEVEN_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch({
      type: MOVIE_TRAILER_EIGHT_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch({
      type: MOVIE_TRAILER_NINE_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
