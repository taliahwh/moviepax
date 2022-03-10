import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ActorScreen from './screens/ActorScreen';
import CastScreen from './screens/CastScreen';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<HomeScreen />} />
        <Route path="/trending/today" exact element={<HomeScreen />} />
        <Route path="/trending/thisweek" exact element={<HomeScreen />} />
        <Route path="/popular/ontv" exact element={<HomeScreen />} />
        <Route path="/popular/forrent" exact element={<HomeScreen />} />
        <Route path="/popular/intheatres" exact element={<HomeScreen />} />
        <Route path="/trailers/ontv" exact element={<HomeScreen />} />
        <Route path="/trailers/forrent" exact element={<HomeScreen />} />
        <Route path="/trailers/intheatres" exact element={<HomeScreen />} />
        <Route path="/:id" exact element={<DetailsScreen />} />
        <Route path="/actor/:id" exact element={<ActorScreen />} />
        <Route path="/cast/:id" exact element={<CastScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
