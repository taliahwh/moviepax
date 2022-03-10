import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import OverviewHeader from '../components/OverviewHeader';
import SeriesCastSection from '../components/SeriesCastSection';
import Footer from '../components/Footer';

import { getMovieDetails } from '../actions/mediaActions';

const DetailsScreen = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

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

  useEffect(() => {
    dispatch(getMovieDetails(id));
  }, [dispatch, id]);
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
    </div>
  );
};

export default DetailsScreen;
