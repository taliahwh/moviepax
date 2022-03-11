import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import { LeftArrow, RightArrow } from '../components/Arrows';
import Footer from '../components/Footer';
import KnownForCard from '../components/KnownForCard';
import ActingSection from '../components/ActingSection';

import { getActorDetails } from '../actions/mediaActions';

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

const ActorScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);

  const {
    loading: loadingActorDetails,
    success: successActorDetails,
    error: errorActorDetails,
    actorDetails,
  } = useSelector((state) => state.actorDetails);

  const {
    loading: loadingActorCredits,
    success: successActorCredits,
    error: errorActorCredits,
    actorCredits,
  } = useSelector((state) => state.actorCredits);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick = (id) => () => {
    const itemSelected = isItemSelected(id);

    setSelected((currentSelected) =>
      itemSelected
        ? currentSelected.filter((el) => el !== id)
        : currentSelected.concat(id)
    );
  };

  useEffect(() => {
    dispatch(getActorDetails(id));
  }, [dispatch, id]);
  return (
    <>
      <div className="h-full mx-auto max-w-8xl">
        {/* Content Area */}
        {/* Actor Personal Info */}
        {successActorDetails && successActorCredits && (
          <div className="px-8 pt-8 pb-6 sm:px-10 md:px-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-11 gap-0 md:gap-4">
            <div className="col-span-1 sm:col-span-1 md:col-span-3 h-screen ">
              <img
                className="h-[20rem] md:h-[30rem] rounded-lg m-auto"
                src={
                  actorDetails.dataprofile_path
                    ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${actorDetails.data.profile_path}`
                    : `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`
                }
                alt="actor"
              />

              <h1 className="visible md:invisible text-secondary text-3xl font-semibold py-1 text-center">
                {actorDetails.data.name}
              </h1>

              <div className="status-network-type-language flex flex-col space-y-4 pt-7">
                <div className="flex flex-col">
                  <h1 className="font-semibold text-xl pb-3">Personal Info</h1>
                  <h2 className="text-md font-semibold">Known For</h2>
                  {actorDetails.data.known_for_department && (
                    <p>{actorDetails.data.known_for_department}</p>
                  )}
                </div>

                <div className="flex flex-col">
                  <h2 className="text-md font-semibold">Known Credits</h2>
                  <p>43</p>
                </div>

                {actorDetails.data.gender === 1 ? (
                  <div className="flex flex-col">
                    <h2 className="text-md font-semibold">Gender</h2>
                    <p>Female</p>
                  </div>
                ) : actorDetails.data.gender === 2 ? (
                  <div className="flex flex-col">
                    <h2 className="text-md font-semibold">Gender</h2>
                    <p>Male</p>
                  </div>
                ) : (
                  ''
                )}

                {actorDetails.data.date_of_birth && (
                  <div className="flex flex-col">
                    <h2 className="text-md font-semibold">Birthday</h2>
                    {/* TODO Birthdate with moment */}
                    <p>01-09-1996 (25 years old)</p>
                  </div>
                )}

                {actorDetails.data.place_of_birth && (
                  <div className="flex flex-col">
                    <h2 className="text-md font-semibold">Place of Birth</h2>
                    <p>{actorDetails.data.place_of_birth}</p>
                  </div>
                )}

                {actorDetails.data.also_known_as && (
                  <div className="flex flex-col">
                    <h2 className="text-md font-semibold">Also Known As</h2>
                    {actorDetails.data.also_known_as.map((name, index) => (
                      <p key={index}>{name}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>
            {/* Biography and Acting */}
            <div className="col-span-1 md:col-span-8 h-full flex flex-col px-0 md:px-2 py-0 md:py-14 ">
              <h1 className="invisible md:visible text-secondary text-4xl font-semibold">
                {actorDetails.data.name}
              </h1>

              <h4 className="py-1 font-semibold text-xl text-secondary pt-0 md:pt-6">
                Biography
              </h4>
              <p className="text-base text-secondary">
                {actorDetails.data.biography ||
                  `There is no bigography for ${actorDetails.data.name} available.`}
              </p>
              <h4 className="py-1 font-semibold text-xl text-secondary pt-6">
                Known For
              </h4>

              <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
                {actorCredits.data.cast
                  .sort((a, b) => b.popularity - a.popularity)
                  .slice(0, 9)
                  .map(
                    (credit, index) =>
                      credit.original_title && (
                        <Card
                          itemId={credit.id} // NOTE: itemId is required for track items
                          title={credit.id}
                          key={index}
                          onClick={handleClick(credit.id)}
                          selected={isItemSelected(credit.id)}
                          credit={credit}
                        />
                      )
                  )}
              </ScrollMenu>

              <h4 className="py-1 font-semibold text-xl text-secondary pt-6">
                {actorDetails.data.known_for_department}
              </h4>
              <ActingSection credits={actorCredits.data.cast} />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

function Card({ onClick, credit }) {
  const visibility = React.useContext(VisibilityContext);

  const {
    loading: loadingActorCredits,
    success: successActorCredits,
    error: errorActorCredits,
    actorCredits,
  } = useSelector((state) => state.actorCredits);

  return (
    <div>
      {successActorCredits && (
        <div
          onClick={() => onClick(visibility)}
          className="pr-5 w-40 pb-5"
          tabIndex={0}
        >
          {/* Map over Treding and display MovieCards */}
          <KnownForCard credit={credit} />
        </div>
      )}
    </div>
  );
}

export default ActorScreen;
