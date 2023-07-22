import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/dashboard';
import SignUp from './components/Login/signUp';
import Login from './components/Login/login';
import Blog from './components/Sections/blog';
import BlogForm from './components/BlogForm/blogform';
import BlogShow from './components/BlogShow/BlogShow';
import TrackPeriod2 from './components/Cycle/cycle2';
import TrackPeriod from './components/Cycle/results';
import Contact from './components/Sections/contact';
import Landing from './components/Screen/landing';

function App() {
  return (
<>
<BrowserRouter>
        <Routes>
          <Route path="" element={<Landing/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/track" element={<TrackPeriod />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard/track" element={<TrackPeriod2 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogform" element={<BlogForm />} />
          <Route path="/blog/:id" element={<BlogShow />} />
          
        </Routes>
      </BrowserRouter>
</>
  );
}

export default App;
