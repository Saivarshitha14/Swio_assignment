
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Sleeve from './pages/Sleeve';
import Umbra from './pages/Umbra';
import MacAppStore from './pages/MacAppStore';
import './App.css';
import Accessories from './pages/Accessories';



const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
        <Route path="/" element={<Sleeve />} />
        <Route path="/sleeve" element={<Sleeve />} />
        <Route path="/umbra" element={<Umbra />} />
        <Route path="/MacAppStore" element={<MacAppStore/>} />
        <Route path="/Accessories" element={<Accessories/>} />

        </Routes>
        
      </div>
    </Router>
  );
};
export default App;
