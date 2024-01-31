import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Showslist from './components/Showlist';
import Showsummary from './components/Showsummary';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Showslist />} />
        <Route path="/show/:id" element={<Showsummary />} />
      </Routes>
    </Router>
  );
};

export default App;
