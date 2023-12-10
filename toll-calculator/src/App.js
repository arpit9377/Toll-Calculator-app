// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import UserEdu from './Components/UserEdu';
import RouteVisu from './Components/RouteVisu';
import TollDetails from './Components/TollDetails';
import About from './Components/About';
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/UserEdu" element={<UserEdu />} />
        <Route path="/RouteVisu" element={<RouteVisu />} />
        <Route path="/TollDetails" element={<TollDetails />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
