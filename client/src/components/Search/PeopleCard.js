import React from 'react';
import { Link } from 'react-router-dom';

import stock_photo from '../../assets/stock_photo.png';

const PeopleCard = ({ person }) => {
  return (
    <Link
      to={`/actor/${person.id}`}
      className="h-36 bg-white w-full flex items-center space-x-4 rounded-md border-1 border-neutral-300 shadow-sm"
    >
      {person.profile_path ? (
        <img
          src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${person.profile_path}`}
          alt="movie poster"
          className="w-28 h-full bg-neutral-200 rounded-l-md"
        />
      ) : (
        <img
          src={stock_photo}
          alt="profile poster"
          className="w-28 h-full bg-neutral-200 rounded-l-md"
        />
      )}
      <div className="w-full flex flex-col ">
        <h1 className="text-lg sm:text-xl font-semibold">{person.name}</h1>

        {person.known_for_department && (
          <p className="text-md font-semibold text-neutral-500">
            {person.known_for_department}
          </p>
        )}

        <div className="flex space-x-2 text-sm">
          {person.known_for &&
            person.known_for.map((media, index) => (
              <p key={index}>
                {media.original_title || media.name || media.original_name}
              </p>
            ))}
        </div>
      </div>
    </Link>
  );
};

export default PeopleCard;
