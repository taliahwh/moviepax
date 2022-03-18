import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';

import OverviewHeader from '../components/MediaDetails/OverviewHeader';
import SeriesCastSection from '../components/SeriesCastSection';
import Footer from '../components/Footer';

import {
  TV_DETAILS_FAILURE,
  MOVIE_DETAILS_FAILURE,
} from '../constants/mediaContstants';
import { getMovieDetails, getTVDetails } from '../actions/mediaActions';

const DetailsScreen = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { id } = useParams();

  // MOVIE STATE

  const {
    loading: loadingMovieDetails,
    error: errorMovieDetails,
    success: successMovieDetails,
    movieDetails,
  } = useSelector((state) => state.movieDetails);

  const {
    loading: loadingMovieCast,
    error: errorMovieCast,
    success: successMovieCast,
    movieCast,
  } = useSelector((state) => state.movieCast);

  const {
    loading: loadingMovieKeywords,
    error: errorMovieKeywords,
    success: successMovieKeywords,
    movieKeywords,
  } = useSelector((state) => state.movieKeywords);

  // TV STATE

  const {
    loading: loadingTVDetails,
    error: errorTVDetails,
    success: successTVDetails,
    tvDetails,
  } = useSelector((state) => state.tvDetails);

  const {
    loading: loadingTVCast,
    error: errorTVCast,
    success: successTVCast,
    tvCast,
  } = useSelector((state) => state.tvCast);

  const {
    loading: loadingTVKeywords,
    error: errorTVKeywords,
    success: successTVKeywords,
    tvKeywords,
  } = useSelector((state) => state.tvKeywords);

  useEffect(() => {
    if (location.pathname.includes('/movie')) {
      dispatch({ type: TV_DETAILS_FAILURE });
      dispatch(getMovieDetails(id));
    } else if (location.pathname.includes('/tv')) {
      dispatch({ type: MOVIE_DETAILS_FAILURE });
      dispatch(getTVDetails(id));
    }
  }, [dispatch, id, location]);
  return (
    <div>
      {successMovieDetails && successMovieCast && successMovieKeywords && (
        <>
          <OverviewHeader item={movieDetails.data} />
          <SeriesCastSection
            item={movieDetails.data}
            cast={movieCast.data.cast}
            details={movieDetails.data}
            keywords={movieKeywords.data.keywords}
          />
          <Footer />
        </>
      )}

      {successTVDetails && successTVCast && successTVKeywords && (
        <>
          <OverviewHeader item={tvDetails.data} />
          <SeriesCastSection
            item={tvDetails.data}
            cast={tvCast.data.cast}
            details={tvDetails.data}
            keywords={tvKeywords.data.results}
          />
          <Footer />
        </>
      )}
    </div>
  );
};

export default DetailsScreen;
