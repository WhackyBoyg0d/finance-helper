import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Profile from './components/Profile';

function App(): JSX.Element {
  return (
    <BrowserRouter>
		  <Routes>
			  <Route path="/" element={<Home />} />
			  <Route path="/profile" element={<Profile />} />
		  </Routes>
	</BrowserRouter>
  );
}

export default App;
