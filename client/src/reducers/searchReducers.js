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

export const searchAllReducer = (state = { searchAllResults: [] }, action) => {
  switch (action.type) {
    case SEARCH_ALL_REQUEST:
      return { loading: true, searchAllResults: [] };
    case SEARCH_ALL_SUCCESS:
      return {
        loading: false,
        success: true,
        searchAllResults: action.payload.results,
        page: action.payload.page,
        pages: action.payload.total_pages,
        totalResults: action.payload.total_results,
      };
    case SEARCH_ALL_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const searchMoviesReducer = (
  state = { searchMoviesResults: [] },
  action
) => {
  switch (action.type) {
    case SEARCH_MOVIES_REQUEST:
      return { loading: true, searchMoviesResults: [] };
    case SEARCH_MOVIES_SUCCESS:
      return {
        loading: false,
        success: true,
        searchMoviesResults: action.payload.results,
        page: action.payload.page,
        pages: action.payload.total_pages,
        totalResults: action.payload.total_results,
      };
    case SEARCH_MOVIES_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const searchTVReducer = (state = { searchTVResults: [] }, action) => {
  switch (action.type) {
    case SEARCH_TV_REQUEST:
      return { loading: true, searchTVResults: [] };
    case SEARCH_TV_SUCCESS:
      return {
        loading: false,
        success: true,
        searchTVResults: action.payload.results,
        page: action.payload.page,
        pages: action.payload.total_pages,
        totalResults: action.payload.total_results,
      };
    case SEARCH_TV_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const searchPeopleReducer = (
  state = { searchPeopleResults: [] },
  action
) => {
  switch (action.type) {
    case SEARCH_PEOPLE_REQUEST:
      return { loading: true, searchPeopleResults: [] };
    case SEARCH_PEOPLE_SUCCESS:
      return {
        loading: false,
        success: true,
        searchPeopleResults: action.payload.results,
        page: action.payload.page,
        pages: action.payload.total_pages,
        totalResults: action.payload.total_results,
      };
    case SEARCH_PEOPLE_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
