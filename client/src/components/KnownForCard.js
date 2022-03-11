import React from 'react';
import { Link } from 'react-router-dom';

const KnownForCard = ({ credit }) => {
  return (
    <Link to="/actor/:id" className="w-32 h-70 rounded-lg">
      <img
        className="h-42 w-full rounded-lg"
        src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${credit.poster_path}`}
        alt=""
      />
      <h1 className="font-medium text-sm text-center py-1">
        {credit.original_title}
      </h1>
    </Link>
  );
};

export default KnownForCard;
