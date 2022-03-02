import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ActorScreen from './screens/ActorScreen';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<HomeScreen />} />
        <Route path="/:id" exact element={<DetailsScreen />} />
        <Route path="/actor/:id" exact element={<ActorScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
