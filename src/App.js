import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CalcHandler from './components/CalcHandler';
import Quote from './components/Quote';
import NavBar from './components/NavBar';

const App = function () {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<CalcHandler />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </>
  );
};

export default App;

/**
 *
 * <div className="App">
    <header className="App-header">

    </header>
  </div>
 */
