import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Navbar from '../layout/Navbar';
// import SignUpForm from '../pages/Signup/features/Sign';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/signin" element={<SignUpForm />} /> */}
    
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
