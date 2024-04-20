import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TutorView from "./pages/TutorView";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import StudentView from "./pages/StudentView";

import NewPosting from "./pages/NewPosting";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/student-view" element={<StudentView />} />
          <Route path="/tutor-view" element={<TutorView />} />
          <Route path="/new-posting" element={<NewPosting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
