import React from 'react';
import { Link } from 'react-router-dom';

const CastCard = () => {
  return (
    <Link to="/actor/:id" className="w-36 h-70 rounded-lg shadow-md">
      <img
        className="h-42 w-full rounded-t-lg"
        src="https://www.themoviedb.org/t/p/w138_and_h175_face/15K3fSP88EZ2T3dQNQoscS7ECkK.jpg"
        alt=""
      />
      <div className="flex flex-col pt-2 pb-6 px-2">
        <h1 className="font-bold">Michael Kenneth Williams</h1>
        <h4 className="text-sm">Omar Little</h4>
        <p className="text-sm text-gray-400">60 Episodes</p>
      </div>
    </Link>
  );
};

export default CastCard;
