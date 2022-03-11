import React from 'react';
import moment from 'moment';

const ActingSection = ({ credits }) => {
  const sortedCredits = credits
    .slice()
    .sort((a, b) => b.popularity - a.popularity);

  // console.log(sortedCredits);
  return (
    <>
      {credits.map(
        (credit) =>
          credit.character !== '' && (
            <div
              key={credit.id}
              className="px-4 py-2 border-1 border-[#dedede]"
            >
              <div className="flex space-x-1">
                <div className="w-8 text-center">
                  {credit.release_date === ''
                    ? '—'
                    : moment(
                        credit.release_date || credit.first_air_date
                      ).format('YYYY')}
                </div>
                <div className="px-4">•</div>
                <div className="font-semibold">
                  {credit.original_title || credit.original_name}
                </div>
                <div className="text-gray-400 px-1">as</div>
                <div>{credit.character}</div>
              </div>
            </div>
          )
      )}
    </>
  );
};

export default ActingSection;
