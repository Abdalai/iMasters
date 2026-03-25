import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../src/components/Header';
import Home from '../src/pages/Home';
import About from './pages/About';
import FAQ from './pages/FAQ';
import WhyApple from './pages/WhyApple';
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
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/why-apple" element={<WhyApple />} />
      </Routes>
      <ScrollToTopButton/>
      <Footer/>
    </Router>
  );
};

export default App;
