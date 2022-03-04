import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

/**
 * Local Components
 */
import { LeftArrow, RightArrow } from './Arrows';
import CastCard from './CastCard';
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
const SeriesCastSection = () => {
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
    <div className="flex flex-col space-y-2 h-[95rem] lg:h-[38rem] bg-gray-100 mx-auto max-w-8xl px-8 pt-12  sm:py-8 sm:px-10 md:px-12">
      {/* Header */}
      <div className="flex space-x-5 items-center pb-4">
        <h3 className="text-2xl font-semibold text-secondary">Series Cast</h3>
      </div>
      {/* Content */}
      <div className="grid grid-cols-1  lg:grid-cols-11 gap-4">
        <div className="col-span-1 lg:col-span-8">
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
        <div className="col-span-1 lg:col-span-3">
          <SeriesFactsSection />
        </div>
      </div>
    </div>
  );
};

function Card({ onClick }) {
  const visibility = React.useContext(VisibilityContext);

  return (
    <div className="">
      <div
        onClick={() => onClick(visibility)}
        className="pr-5 w-40 pb-5"
        tabIndex={0}
      >
        {/* Map over Treding and display MovieCards */}
        <CastCard />
      </div>
    </div>
  );
}

export default SeriesCastSection;
