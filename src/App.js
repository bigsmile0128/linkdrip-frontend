// import basic files
import './App.css';

// import components
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import GetEarlyAccess from './components/access/GetEarlyAccess';
import Contact from './components/contact/Contact';
import Resource from './components/resources/Resource';
import Analytics from './components/analytics/Analytics';
import CallToAction from './components/callToAction/callToAction';
import Retarget from './components/retarget/Retarget';
import Testing from './components/testing/Testing';
import Code from './components/code/Code';
import Rotation from './components/rotation/Rotation';
import Term from './components/term/Term';
import Feature from './components/feature/Feature';
// import modules
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from "react-router-dom";

// Image loading


function App() {
  return (
      <>
      <Router> 
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/early-access/offer" element={<GetEarlyAccess />} />
              <Route path="/getInTouch" element={<Contact />} />
              <Route path="/resource" element={<Resource />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/callToAction" element={<CallToAction />} />
              <Route path="/retarget" element={<Retarget />} />
              <Route path="/testing" element={<Testing />} />
              <Route path="/code" element={<Code />} />
              <Route path="/rotation" element={<Rotation />} />
              <Route path="/term" element={<Term />} />
              <Route path="/getAllFeatures" element={<Feature />} />
            </Routes>  
            <Footer />
        </Router>
      </>
  );
}

export default App;
