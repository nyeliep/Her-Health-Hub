import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/dashboard';
import SignUp from './components/Login/signUp';
import Login from './components/Login/login';
import Blog from './components/Sections/blog';
import Contact from './components/Sections/contact';
import Landing from './components/Screen/landing';

function App() {
  return (
<>
<BrowserRouter>
        <Routes>
          <Route path="" element={<Landing/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/dashboard/track" element={<TrackPeriod2 />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
</>
  );
}

export default App;
