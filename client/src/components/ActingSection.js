import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const ActingSection = () => {
  return (
    <div className="px-4 py-2 border-1 border-[#dedede] shadow-md">
      <div className="flex space-x-1">
        <div className="">2021</div>
        <div className="px-4">•</div>
        <div className="font-semibold">Dune</div>
        <div className="text-gray-400 px-1">as</div>
        <div>Chani</div>
      </div>
    </div>
  );
};

export default ActingSection;
