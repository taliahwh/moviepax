import React from 'react';

const SeriesFactsSection = ({ details, keywords }) => {
  return (
    <div className="flex flex-col space-y-4 px-2 pb-5">
      {/* Social Media Icons */}

      <div className="status-network-type-language flex flex-col space-y-4">
        <div className="flex flex-col">
          <h2 className="text-md font-semibold">Status</h2>
          <p>{details.status}</p>
        </div>

        {details.networks && (
          <div className="flex flex-col space-y-3">
            <h2 className="text-md font-semibold">Network</h2>
            {details.networks.length > 0
              ? details.networks.map((network, index) => (
                  <img
                    key={index}
                    className="w-28"
                    src={`https://www.themoviedb.org/t/p/h50${network.logo_path}`}
                    alt="hbo"
                  />
                ))
              : '--'}
          </div>
        )}

        {details.type && (
          <div className="flex flex-col">
            <h2 className="text-md font-semibold">Type</h2>
            <p>{details.type}</p>
          </div>
        )}

        <div className="flex flex-col">
          <h2 className="text-md font-semibold">Original Language</h2>
          {details.original_language === 'zh'
            ? 'Chinese'
            : details.original_language === 'en'
            ? 'English'
            : '-'}
        </div>

        <div className="flex flex-col">
          <h2 className="text-md font-semibold">Keywords</h2>
          <div className="flex flex-wrap space-x-1">
            {keywords.length > 0
              ? keywords.map((keyword) => (
                  <p
                    key={keyword.id}
                    className="text-secondary text-sm bg-[rgba(0,0,0,0.1)] px-2 py-1 my-1 rounded-md border-1 border-[#d7d7d7]"
                  >
                    {keyword.name}
                  </p>
                ))
              : 'No keywords have been added.'}
          </div>
        </div>
      </div>

      <div className="keywords"></div>
    </div>
  );
};

export default SeriesFactsSection;
