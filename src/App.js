// import basic files
import './App.css';

// import components
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
// import modules
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from "react-router-dom";

// Image loading


function App() {
  return (
      <>
      <Router> 
        <Navbar />
            <Routes>
              <Route
                  path="/"
                  element={<Dashboard />}
                />
            </Routes>  
            <Footer />
        </Router>
      </>
  );
}

export default App;
