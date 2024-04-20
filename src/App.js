import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate, } from 'react-router-dom';
import './App.scss';
import Login from './Login.js';
import Button from 'react-bootstrap/Button';

function LandingPage() {

  const navigate = useNavigate();
  function handleNewPageClick() {
  navigate('/login');
}

  return (
    <div className="App">
      <div className="LandingHeader">
        <h1>D214TutorConnect</h1>
      </div>
      <header>
        
      </header>
      <div className="App-main">
        <h2>Find a Peer Tutor</h2>
        <nav>
          <Routes>
            <Route path ="/" element={
              <>
              <Button onClick={handleNewPageClick}>Login</Button>
              </>
            } />
            <Route path="/login" element={<Login />} />
          </Routes>
        </nav>
      </div>
      <p>Get connected with tutors who can help you succeed!</p>
    </div>
  );
}



export default LandingPage;
