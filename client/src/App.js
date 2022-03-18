import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ActorScreen from './screens/ActorScreen';
import CastScreen from './screens/CastScreen';
import SearchScreen from './screens/SearchScreen';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<HomeScreen />} />
        <Route path="/trending/today" exact element={<HomeScreen />} />
        <Route path="/trending/thisweek" exact element={<HomeScreen />} />
        <Route path="/popular/ontv" exact element={<HomeScreen />} />
        <Route path="/popular/movies" exact element={<HomeScreen />} />
        <Route path="/trailers/ontv" exact element={<HomeScreen />} />
        <Route path="/trailers/movies" exact element={<HomeScreen />} />
        <Route path="/movie/:id" exact element={<DetailsScreen />} />
        <Route path="/tv/:id" exact element={<DetailsScreen />} />
        <Route path="/actor/:id" exact element={<ActorScreen />} />
        <Route path="/movie/cast/:id" exact element={<CastScreen />} />
        <Route path="/tv/cast/:id" exact element={<CastScreen />} />
        {/* <Route path="/search" exact element={<SearchScreen />} /> */}
        <Route path="/search/query=:query" exact element={<SearchScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
