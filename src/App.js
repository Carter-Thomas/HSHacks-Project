import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate, } from 'react-router-dom';
import './App.css';
import Login from '../hshacks-app-frontend/src/Login';
import Button from 'react-bootstrap/Button';

function LandingPage() {

  const navigate = useNavigate();
  function handleNewPageClick() {
  navigate('/login');
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>Find a Peer Tutor</h1>
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
        <p>Get connected with tutors who can help you succeed!</p>
      </header>
    </div>
  );
}



export default LandingPage;
