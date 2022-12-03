import React from 'react';
import HomeScreen from "./HomeScreen";

import './App.css';
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
 