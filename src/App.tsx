import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Profile from './components/Profile';
import Login from "./components/Login";
import Courses from './components/courses/Courses';
import Onboarding from './components/onboarding/Onboarding';

function App(): JSX.Element {
  return (
	  <BrowserRouter>
		  <Routes>

			  <Route path="/" element={<Home />} />
			  <Route path="/profile" element={<Profile />} />
			  <Route path="/courses/*" element={<Courses />} />
			  <Route path="/login" element={<Login />} />
			  <Route path="/onboarding" element={<Onboarding />} />
		  </Routes>
	</BrowserRouter>
  );
}

export default App;
