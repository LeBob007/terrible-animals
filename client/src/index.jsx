import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import Contact from './pages/Contact';
import About from './pages/About';
import Animal from './pages/Animal';
import NavBar from './NavBar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/:animal" element={<Animal />} />
    </Routes>
  </BrowserRouter>,
);
