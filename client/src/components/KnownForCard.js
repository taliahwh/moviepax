import React from 'react';
import { Link } from 'react-router-dom';

const KnownForCard = () => {
  return (
    <Link to="/actor/:id" className="w-32 h-70 rounded-lg">
      <img
        className="h-42 w-full rounded-lg"
        src="https://www.themoviedb.org/t/p/w138_and_h175_face/15K3fSP88EZ2T3dQNQoscS7ECkK.jpg"
        alt=""
      />
      <h1 className="font-medium text-sm text-center py-1">The Good Doctor</h1>
    </Link>
  );
};

export default KnownForCard;
