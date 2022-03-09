import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const SeriesFactsSection = ({ details, keywords }) => {
  return (
    <div className="flex flex-col space-y-4 px-2 pb-5">
      {/* Social Media Icons */}
      <div className="social-media-icons flex space-x-4">
        <Link to="/">
          {' '}
          <FaInstagram className="text-2xl" />
        </Link>
        <Link to="/">
          {' '}
          <FaTwitter className="text-2xl" />
        </Link>
      </div>

      <div className="status-network-type-language flex flex-col space-y-4">
        <div className="flex flex-col">
          <h2 className="text-md font-semibold">Status</h2>
          <p>{details.status}</p>
        </div>

        <div className="flex flex-col">
          <h2 className="text-md font-semibold">Network</h2>
          <img
            className="w-20"
            src="https://www.themoviedb.org/t/p/h30/tuomPhY2UtuPTqqFnKMVHvSb724.png"
            alt="hbo"
          />
        </div>

        <div className="flex flex-col">
          <h2 className="text-md font-semibold">Type</h2>
          <p>Scripted</p>
        </div>

        <div className="flex flex-col">
          <h2 className="text-md font-semibold">Original Language</h2>
          <p>English</p>
        </div>

        <div className="flex flex-col">
          <h2 className="text-md font-semibold">Keywords</h2>
          <div className="flex flex-wrap space-x-1">
            {keywords.map((keyword) => (
              <p
                key={keyword.id}
                className="text-secondary text-sm bg-[rgba(0,0,0,0.1)] px-2 py-1 my-1 rounded-md border-1 border-[#d7d7d7]"
              >
                {keyword.name}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="keywords"></div>
    </div>
  );
};

export default SeriesFactsSection;
