import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './pages/About';
import Footer from './components/Footer';
import Background from './components/Background';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col relative">
        <Background />
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;