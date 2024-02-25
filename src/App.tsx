import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Profile from "./components/profile/Profile";
import Login from "./components/login/Login";
import CourseSelector from "./components/courses/CourseSelector";
import Landing from "./components/landing/Landing";
import Onboarding from "./components/onboarding/Onboarding";
import SignUp from "./components/signup/SignUp";

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
				<Route path="/budget" element={<Budget />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
