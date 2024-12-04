import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ComputerDetail from './components/ComputerDetail';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/computer/:id" element={<ComputerDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
