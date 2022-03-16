import React from 'react';
import { Link } from 'react-router-dom';

const PeopleCard = () => {
  return (
    <Link
      to="/"
      className="h-58 bg-white w-44 flex flex-col items-center rounded-md border-1 border-neutral-300 shadow-sm py-4"
    >
      <img
        src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fnOghG8JjYDicgNrsy80mKdwj5B.jpg"
        alt="movie poster"
        className="w-full h-44 bg-neutral-200 rounded-md mb-2"
      />
      <div className="w-full flex flex-col text-center">
        <h1 className="text-lg sm:text-xl font-semibold">Queen Latifah</h1>
        <h4 className="text-md text-[#999999]">Acting</h4>
      </div>
    </Link>
  );
};

export default PeopleCard;
