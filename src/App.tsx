import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Profile from './components/Profile';
import Login from "./components/Login";
import Courses from './components/courses/Courses';

function App(): JSX.Element {
  return (
    <BrowserRouter>
		  <Routes>
			  <Route path="/" element={<Home />} />
			  <Route path="/profile" element={<Profile />} />
			  <Route path="/courses/*" element={<Courses />} />
			  <Route path="/login" element={<Login />} />
		  </Routes>
	</BrowserRouter>
  );
}

export default App;
