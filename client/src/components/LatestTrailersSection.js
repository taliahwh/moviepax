import React from 'react';

import TrailerCard from './TrailerCard';

const LatestTrailersSection = () => {
  return (
    <div
      className="flex flex-col space-y-2 h-[26rem] bg-cover mx-auto max-w-8xl px-8 pt-12  sm:py-8 sm:px-10 md:px-20"
      style={{
        backgroundImage: `linear-gradient(100deg, rgba(43, 37, 37, 0.92) 38%, rgba(250, 202, 12, 0.9)), url(https://film-book.com/wp-content/uploads/2021/02/euphoria-logo-01-700x400-1.jpg)`,
      }}
    >
      {/* Header */}
      <div className="flex space-x-5 items-center pb-4">
        <h3 className="text-2xl font-semibold text-white">Latest Trailers</h3>
        <div className="flex space-x-3 border-1 border-primary rounded-full">
          <p className="active bg-primary text-secondary px-5 py-1 rounded-full font-semibold ">
            Streaming
          </p>
          <p className="px-5 py-1 font-semibold text-white">TV</p>
          <p className="px-5 py-1 font-semibold text-white">For Rent</p>
          <p className="px-5 py-1 font-semibold text-white">In Theatres</p>
        </div>
      </div>
      {/* Content */}
      <div className="grid grid-cols-3 gap-5 pt-5">
        <TrailerCard />
        <TrailerCard />
        <TrailerCard />
      </div>
    </div>
  );
};

export default LatestTrailersSection;
