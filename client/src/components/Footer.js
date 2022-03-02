import React from 'react';

import logo from '../assets/movipax_logo.png';

const Footer = () => {
  return (
    <div className="h-20 bg-secondary flex items-center justify-center">
      <img className="w-36 h-8" src={logo} alt="" />
    </div>
  );
};

export default Footer;
