import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {

  return (
    <Router>
      <div className="App">
        <div className="content">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} ></Route>
            <Route exact path="/meme-battle"></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
} 

export default App;
