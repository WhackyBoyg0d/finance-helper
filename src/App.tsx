import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Profile from './components/Profile';
import Courses from './components/courses/Courses';

function App(): JSX.Element {
  return (
    <BrowserRouter>
		  <Routes>
			  <Route path="/" element={<Home />} />
			  <Route path="/profile" element={<Profile />} />
			  <Route path="/courses/*" element={<Courses />} />
		  </Routes>
	</BrowserRouter>
  );
}

export default App;
