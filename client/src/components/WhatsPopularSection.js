import React from 'react';

import MovieCard from './MovieCard';

const WhatsPopularSection = () => {
  return (
    <div className="flex flex-col space-y-2 h-[27rem] mx-auto max-w-8xl px-8 pt-12  sm:py-8 sm:px-10 md:px-20 ">
      {/* Header */}
      <div className="flex space-x-5 items-center pb-4">
        <h3 className="text-2xl font-semibold text-secondary">
          What's Popular
        </h3>
        <div className="flex space-x-3 border-1 border-secondary rounded-full">
          <p className="active bg-secondary px-5 py-1 rounded-full font-semibold text-white">
            Streaming
          </p>
          <p className="px-5 py-1 font-semibold">On TV</p>
          <p className="px-5 py-1 font-semibold">For Rent</p>
          <p className="px-5 py-1 font-semibold">In Theatres</p>
        </div>
      </div>
      {/* Content */}
      <div className="grid grid-cols-6 gap-5">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};

export default WhatsPopularSection;
