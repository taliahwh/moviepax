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
  MOVIE_IN_THEATRES_REQUEST,
  MOVIE_IN_THEATRES_SUCCESS,
  MOVIE_IN_THEATRES_FAILURE,
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
} from '../constants/trailerConstants';

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

export const getTVTrailers = () => async (dispatch) => {
  try {
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
    console.log(idList);

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

    /* ---------------------------------------------------------------------------------------- */
  } catch (error) {
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
  }
};
