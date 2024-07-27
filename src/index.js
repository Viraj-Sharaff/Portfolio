import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/about/About';
import Nav from './components/nav/Nav';
import './index.css';

const AppNavigation = () => (
  <Router>
    <Nav />
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/skills" element={<h1>Skills</h1>} />
      <Route path="/projects" element={<h1>Projects</h1>} />
      <Route path="/contact" element={<h1>Contact</h1>} />
    </Routes>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppNavigation />
  </React.StrictMode>
);

reportWebVitals();
