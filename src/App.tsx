import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Profile from './components/Profile';
import Login from "./components/Login";
import CourseSelector from './components/courses/CourseSelector';
import Landing from './components/Landing';

function App(): JSX.Element {
  return (
    <BrowserRouter>
		  <Routes>
			  <Route path="/" element={<Landing />} />
			  <Route path="/profile" element={<Profile />} />
			  <Route path="/courses/*" element={<CourseSelector />} />
			  <Route path="/login" element={<Login />} />
		  </Routes>
	</BrowserRouter>
  );
}

export default App;
