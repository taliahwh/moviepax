import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import banner from '../assets/the_wire_banner.png';

const OverviewHeader = () => {
  return (
    <div
      className="h-[56rem] sm:h-[38rem] md:h-[36rem] mx-auto max-w-8xl bg-cover shadow-md hero-pattern"
      style={{
        backgroundImage: `linear-gradient(100deg, rgba(43, 37, 37, 0.92) 38%, rgba(43, 37, 37, 0.92)), url(${banner})`,
      }}
    >
      {/* Content Area */}
      <div className="px-8 pt-8 pb-6 sm:px-10 md:px-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-11 gap-4">
        <div className="col-span-1 sm:col-span-1 md:col-span-3 h-full">
          <img
            className="h-[20rem] md:h-[30rem] rounded-lg m-auto"
            src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4lbclFySvugI51fwsyxBTOm4DqK.jpg"
            alt="movie poster"
          />
        </div>
        <div className="col-span-1 sm:col-span-2 md:col-span-8 flex flex-col pl-6 py-4 sm:py-14 ">
          <h1 className="text-white text-4xl font-semibold pb-1">
            The Wire <span className="font-normal text-gray-300">(2002)</span>
          </h1>
          <div className="flex space-x-3 text-white">
            <p className="font-light border-1 text-gray-300 border-gray-300 px-1">
              TV-MA
            </p>
            <p>Crime, Drama</p>
            <p>•</p>
            <p>1hr</p>
          </div>

          <div className="pt-8 flex space-x-1 sm:space-x-4 items-center">
            <div className="rounded-full w-12 h-12 bg-secondary outline outline-offset-0 outline-green-500">
              <p className="text-white font-medium relative left-2.5 top-3 ">
                84<span className="text-xs font-semibold">%</span>
              </p>
            </div>

            <button>
              <FontAwesomeIcon
                icon={faHeart}
                className="text-white fa-sm bg-secondary rounded-full p-4"
              />
            </button>
            <button>
              <FontAwesomeIcon
                icon={faBookmark}
                className="text-white fa-sm bg-secondary rounded-full p-4"
              />
            </button>
            <button className="flex items-center">
              <FontAwesomeIcon
                icon={faPlay}
                className="text-white fa-sm bg-secondary
                  rounded-full p-4"
              />{' '}
              <span className="font-medium text-white ml-2 invisible md:visible">
                Play Trailer
              </span>
            </button>
          </div>

          <h3 className="py-5 text-base italic text-gray-400">
            All in the game.
          </h3>
          <h4 className="py-1 font-medium text-xl text-white">Overview</h4>
          <p className="text-base font-light text-white">
            Told from the points of view of both the Baltimore homicide and
            narcotics detectives and their targets, the series captures a
            universe in which the national war on drugs has become a permanent,
            self-sustaining bureaucracy, and distinctions between good and evil
            are routinely obliterated.
          </p>
          <h4 className="pt-6 font-semibold text-md text-white">David Simon</h4>
          <p className="font-light text-white">Creator</p>
        </div>
      </div>
    </div>
  );
};

export default OverviewHeader;
