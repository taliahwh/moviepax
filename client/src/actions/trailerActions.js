import axios from 'axios';

import {
  TV_ON_AIR_REQUEST,
  TV_ON_AIR_SUCCESS,
  TV_ON_AIR_FAILURE,
  TV_TRAILER_ONE_REQUEST,
  TV_TRAILER_ONE_SUCCESS,
  TV_TRAILER_ONE_FAILURE,
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
    data.results.slice(0, 9).map((result) => idList.push(result.id));
    // console.log(idList);

    dispatch({ type: TV_TRAILER_ONE_REQUEST });

    const trailerOneData = await axios.get(
      `${TMDB_BASE_URL}/tv/${idList[1]}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    );

    dispatch({ type: TV_TRAILER_ONE_SUCCESS, payload: trailerOneData.data });

    // console.log(trailerOneData.data);
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
