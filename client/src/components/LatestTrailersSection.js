import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import { LeftArrow, RightArrow } from './Arrows';
import TrailerCard from './TrailerCard';

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

const LatestTrailersSection = () => {
  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };

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
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {items.map(({ id }) => (
          <Card
            itemId={id} // NOTE: itemId is required for track items
            title={id}
            key={id}
            onClick={handleClick(id)}
            selected={isItemSelected(id)}
          />
        ))}
      </ScrollMenu>
    </div>
  );
};

function Card({ onClick }) {
  const visibility = React.useContext(VisibilityContext);

  return (
    <div className="">
      <div
        onClick={() => onClick(visibility)}
        className="pr-5 w-96 pb-5"
        tabIndex={0}
      >
        {/* Map over Treding and display MovieCards */}
        <TrailerCard />
      </div>
    </div>
  );
}

export default LatestTrailersSection;
