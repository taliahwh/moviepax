import React from 'react';

const TrailerCard = () => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <img
          className="w-96 rounded-lg mx-1"
          src="https://film-book.com/wp-content/uploads/2021/02/euphoria-logo-01-700x400-1.jpg"
          alt="movie cover"
        />
      </div>

      <p className="font-semibold text-lg px-3 text-white pt-3">Euphoria</p>
      <p className="font-light text-md px-3 text-white">Official Trailer</p>
    </div>
  );
};

export default TrailerCard;
