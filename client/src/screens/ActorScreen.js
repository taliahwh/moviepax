import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import { LeftArrow, RightArrow } from '../components/Arrows';
import Footer from '../components/Footer';
import KnownForCard from '../components/KnownForCard';
import ActingSection from '../components/ActingSection';

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

const ActorScreen = () => {
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
    <>
      <div className="h-full mx-auto max-w-8xl">
        {/* Content Area */}
        {/* Actor Personal Info */}
        <div className="px-8 pt-8 pb-6 sm:px-10 md:px-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-11 gap-0 md:gap-4">
          <div className="col-span-1 sm:col-span-1 md:col-span-3 h-full ">
            <img
              className="h-[20rem] md:h-[30rem] rounded-lg m-auto"
              src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/so3GqzuvXbYkNzQYNliAMB5rZzT.jpg"
              alt="actor"
            />

            <h1 className="visible md:invisible text-secondary text-3xl font-semibold py-1 text-center">
              Zendaya
            </h1>

            <div className="status-network-type-language flex flex-col space-y-4 pt-7">
              <div className="flex flex-col">
                <h1 className="font-semibold text-xl pb-3">Personal Info</h1>
                <h2 className="text-md font-semibold">Known For</h2>
                <p>Acting</p>
              </div>

              <div className="flex flex-col">
                <h2 className="text-md font-semibold">Known Credits</h2>
                <p>43</p>
              </div>

              <div className="flex flex-col">
                <h2 className="text-md font-semibold">Gender</h2>
                <p>Female</p>
              </div>

              <div className="flex flex-col">
                <h2 className="text-md font-semibold">Birthday</h2>
                <p>01-09-1996 (25 years old)</p>
              </div>

              <div className="flex flex-col">
                <h2 className="text-md font-semibold">Place of Birth</h2>
                <p>Oakland, California, USA</p>
              </div>

              <div className="flex flex-col">
                <h2 className="text-md font-semibold">Also Known As</h2>
                <p>Zendaya Coleman</p>
              </div>
            </div>
          </div>
          {/* Biography and Acting */}
          <div className="col-span-1 md:col-span-8 h-full flex flex-col px-0 md:px-2 py-0 md:py-14 ">
            <h1 className="invisible md:visible text-secondary text-4xl font-semibold">
              Zendaya
            </h1>

            <h4 className="py-1 font-semibold text-xl text-secondary pt-0 md:pt-6">
              Biography
            </h4>
            <p className="text-base font-light text-secondary">
              Zendaya Maree Stoermer Coleman (born September 1, 1996) is an
              American actress and singer. She began her career as a child model
              and backup dancer. She rose to mainstream prominence for her role
              as Rocky Blue on the Disney Channel sitcom Shake It Up
              (2010–2013). In 2013, Zendaya was a contestant on the 16th season
              of the dance competition series Dancing with the Stars. She
              produced and starred as the titular spy, K.C. Cooper, in the
              sitcom K.C. Undercover (2015–2018). Her film roles include the
              musical drama The Greatest Showman (2017), the superhero film
              Spider-Man: Homecoming (2017) and its sequels, the
              computer-animated musical comedy Smallfoot (2018), the romantic
              drama Malcolm & Marie (2021), the live-action/animation hybrid
              sports comedy Space Jam: A New Legacy (2021), and the science
              fiction epic Dune (2021).
            </p>
            <h4 className="py-1 font-semibold text-xl text-secondary pt-6">
              Known For
            </h4>

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

            <h4 className="py-1 font-semibold text-xl text-secondary pt-6">
              Acting
            </h4>
            <ActingSection />
          </div>
        </div>
      </div>
      <Footer />
    </>
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
        <KnownForCard />
      </div>
    </div>
  );
}

export default ActorScreen;
