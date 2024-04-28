import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Addstudent from "./Addstudent";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/addstudent" element={<Addstudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
