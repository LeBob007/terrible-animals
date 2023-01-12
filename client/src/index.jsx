import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import Contact from './pages/Contact';
import About from './pages/About';
import Animal from './pages/Animal';
import Login from './pages/Login';
import Header from './pages/Header';
import NavBar from './NavBar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />
    <NavBar />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/:name" element={<Animal />} />
    </Routes>
  </BrowserRouter>,
);
