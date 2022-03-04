import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import { LeftArrow, RightArrow } from './Arrows';
import MovieCard from './MovieCard';

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

const TrendingSection = () => {
  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);

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
    <div className="flex flex-col space-y-2 h-[28rem] mx-auto max-w-8xl px-8 pt-12  sm:py-8 sm:px-10 md:px-20 ">
      {/* Header */}
      <div className="flex space-x-5 items-center pb-4 ">
        <h3 className="text-2xl font-semibold text-secondary">Trending</h3>
        <div className="flex space-x-3 border-1 border-secondary rounded-full">
          <p className="active bg-secondary px-5 py-1 rounded-full font-semibold text-white">
            Today
          </p>
          <p className="px-5 py-1 font-semibold">This Week</p>
        </div>
      </div>
      {/* Content */}
      {/* <div className="grid grid-cols-6 gap-5"> */}
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
      <div className="scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 h-32 overflow-y-scroll"></div>
    </div>
    // </div>
  );
};

function Card({ onClick }) {
  const visibility = React.useContext(VisibilityContext);

  return (
    <div
      onClick={() => onClick(visibility)}
      className="flex space-x-2"
      tabIndex={0}
    >
      {/* Map over Treding and display MovieCards */}
      <MovieCard />
    </div>
  );
}

export default TrendingSection;
