import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

/**
 * Local Components
 */
import { LeftArrow, RightArrow } from './Arrows';
import SeriesFactsSection from '../components/SeriesFactsSection';

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

/**
 * SeriesCastSection Component
 *
 * @param {Object} props
 * @param {String} props.title
 * @param {String} props.size
 */
const SeriesCastSection = ({ item, cast, details, keywords }) => {
  const [items, setItems] = useState(getItems);
  const [selected, setSelected] = useState([]);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick = (id) => () => {
    const itemSelected = isItemSelected(id);

    setSelected((currentSelected) =>
      itemSelected
        ? currentSelected.filter((el) => el !== id)
        : currentSelected.concat(id)
    );
  };

  return (
    <div className="flex flex-col space-y-2 h-[95rem] lg:h-[38rem] bg-gray-100 mx-auto max-w-8xl px-8 pt-12  sm:py-8 sm:px-10 md:px-12">
      {/* Header */}
      <div className="flex space-x-4 items-center pb-4">
        <h3 className="text-2xl font-semibold text-secondary">
          Top Billed Cast
        </h3>
        <Link to={`/cast/${item.id}`} className="underline">
          View full cast
        </Link>
      </div>
      {/* Content */}
      <div className="grid grid-cols-1  lg:grid-cols-11 gap-4">
        <div className="col-span-1 lg:col-span-8">
          <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {cast.slice(0, 9).map((actor) => (
              <Card
                itemId={actor.id}
                title={actor.id}
                key={actor.id}
                onClick={handleClick(actor.id)}
                selected={isItemSelected(actor.id)}
                actor={actor}
              />
            ))}
          </ScrollMenu>
        </div>
        <div className="col-span-1 lg:col-span-3">
          <SeriesFactsSection details={details} keywords={keywords} />
        </div>
      </div>
    </div>
  );
};

function Card({ onClick, actor }) {
  const visibility = React.useContext(VisibilityContext);

  return (
    <div className="">
      <div
        onClick={() => onClick(visibility)}
        className="pr-5 w-40 pb-5"
        tabIndex={0}
      >
        {/* Map over Treding and display MovieCards */}
        <Link to={`/actor/${actor.id}`} className="w-36 h-70 rounded-lg">
          <img
            className="h-42 w-full rounded-t-lg"
            src={
              actor.profile_path
                ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${actor.profile_path}`
                : `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`
            }
            alt=""
          />
          <div className="flex flex-col pt-2 pb-3 px-2 bg-white shadow-md rounded-b-md">
            <h1 className="font-bold">{actor.name}</h1>
            <h4 className="text-sm">{actor.character}</h4>
            {/* <p className="text-sm text-gray-400">60 Episodes</p> */}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SeriesCastSection;
