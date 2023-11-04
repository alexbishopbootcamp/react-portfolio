import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutMe from './components/AboutMe/AboutMe';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';

const App = () => {
  return (
    <div className="bg-gray-100 sm:bg-gray-100">
      <Router>
        <Header />
        <div className="flex flex-col justify-between min-h-screen
                        pt-0 pb-20 sm:pt-32 sm:pb-0 sm:p-8
                        sm:max-w-screen-lg m-auto">
          <Routes>
            <Route path="/about" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
