// client/src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Resources from './pages/Resources';
import AISpeechTherapy from './pages/AISpeechTherapy';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/ai-speech-therapy" element={<AISpeechTherapy />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;