
import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Profile from './components/Profile';
import Login from "./components/Login";
import CourseSelector from './components/courses/CourseSelector';
import Landing from './components/Landing';
import Onboarding from './components/onboarding/Onboarding';
import SignUp from './components/SignUp';


function App(): JSX.Element {
  return (
	  <BrowserRouter>
		  <Routes>
			  <Route path="/" element={<Landing />} />
			  <Route path="/profile" element={<Profile />} />
			  <Route path="/courses/*" element={<CourseSelector />} />
			  <Route path="/login" element={<Login />} />
			  <Route path="/onboarding" element={<Onboarding />} />
			  <Route path="/signup" element={<SignUp />} />
		  </Routes>
	</BrowserRouter>
  );
}

export default App;
