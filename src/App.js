import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../src/components/Header';
import Home from '../src/pages/Home';
import About from './pages/About';
import ScrollToTopButton from './components/ScrollToTop';
import "./styles/general.css";
import Footer from './components/Footer';




const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <ScrollToTopButton/>
      <Footer/>
    </Router>
  );
};

export default App;
