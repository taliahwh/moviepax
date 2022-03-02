import React from 'react';

import CastCard from './CastCard';
import SeriesFactsSection from '../components/SeriesFactsSection';

const SeriesCastSection = () => {
  return (
    <div className="flex flex-col space-y-2 h-[95rem] lg:h-[38rem] bg-gray-100 mx-auto max-w-8xl px-8 pt-12  sm:py-8 sm:px-10 md:px-12">
      {/* Header */}
      <div className="flex space-x-5 items-center pb-4">
        <h3 className="text-2xl font-semibold text-secondary">Series Cast</h3>
      </div>
      {/* Content */}
      <div className="grid grid-cols-1  lg:grid-cols-11 gap-4">
        <div className="col-span-1 lg:col-span-8">
          <div className="grid grid-cols-3 lg:grid-cols-5 gap-2">
            <CastCard />
            <CastCard />
            <CastCard />
            <CastCard />
            <CastCard />
          </div>
        </div>
        <div className="col-span-1 lg:col-span-3">
          <SeriesFactsSection />
        </div>
      </div>
    </div>
  );
};

export default SeriesCastSection;
