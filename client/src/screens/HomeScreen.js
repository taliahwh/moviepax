import React from 'react';

import HomeSearchSection from '../components/HomeSearchSection';
import WhatsPopularSection from '../components/WhatsPopularSection';
import FreeToWatchSection from '../components/FreeToWatchSection';
import LatestTrailersSection from '../components/LatestTrailersSection';
import TrendingSection from '../components/TrendingSection';
import Footer from '../components/Footer';

const HomeScreen = () => {
  return (
    <div>
      <HomeSearchSection />
      <TrendingSection />
      <WhatsPopularSection />
      <LatestTrailersSection />
      <Footer />
    </div>
  );
};

export default HomeScreen;
