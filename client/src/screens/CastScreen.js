import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const CastScreen = () => {
  return (
    <div className="flex flex-col space-y-5 md:space-y-8 h-full mx-auto max-w-8xl">
      {/* Title Section */}
      <div className="flex space-x-4 items-center bg-stone-600 h-full px-8 sm:py-5 sm:px-10 md:px-12">
        <img
          className="w-16 h-22 rounded-md"
          src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg"
          alt="prop"
        />
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-white">
            Eternals <span className="font-medium">(2001)</span>
          </h1>
          <Link to="/" className="font-medium text-neutral-300">
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="text-neutral-300 pr-1 text-sm"
            />
            Back to Main
          </Link>
        </div>
      </div>

      {/* Cast and Crew */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
        <div className=" col-span-1 px-8 sm:px-10 md:px-12">
          {/* Cast */}
          <h1 className="font-semibold text-secondary text-2xl">
            Cast <span className="font-normal text-neutral-500 pl-1">37</span>
          </h1>
          <div className="flex space-x-4 py-2 items-center">
            <img
              className="w-16 h-16 rounded-md"
              src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/stTKj4iNauhqlVmZ6XAsFsvcMCY.jpg"
              alt="character name"
            />
            <div className="flex flex-col">
              <p className="font-bold">Name</p>
              <p>Character Name</p>
            </div>
          </div>
        </div>
        {/* Crew */}
        <div className="col-span-1 px-8 sm:px-0">
          <h1 className="font-semibold text-secondary text-2xl ">
            Crew <span className="font-normal text-neutral-500 pl-1">37</span>
          </h1>
          <div className="flex space-x-4 py-2 items-center">
            <img
              className="w-16 h-16 rounded-md"
              src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/stTKj4iNauhqlVmZ6XAsFsvcMCY.jpg"
              alt="character name"
            />
            <div className="flex flex-col">
              <p className="font-bold">Name</p>
              <p>Character Name</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CastScreen;
