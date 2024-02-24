import React, { useState } from "react";
import response from "data/users.json";
import { useNavigate } from "react-router-dom";
import finwise from '../assets/finwise.png';
import { FaGoogle } from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {FaReddit} from "react-icons/fa";

interface UserData {
  username: string;
  password: string;
  // Add other properties as needed
}

async function fetchUserData(): Promise<UserData[]> {
  // Fetch user data from data/users.json
  const userData: UserData[] = response;
  return userData;
}

export function Login(): JSX.Element {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    const userData = await fetchUserData();

    // Check if the entered username and password match any user in the data
    const user = userData.find((user) => user.username === username && user.password === password);

    if (user) {
		
		navigate("/");
      console.log("Authentication successful");
    } else {
      // Authentication failed, display an error message or take appropriate action
      console.error("Authentication failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-primary">
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
                <img src={finwise} alt="Logo" className="mb-4 w-20 h-20" /> 
				<p className="text-gray-600">Login with your social media account</p>
                <div className="flex justify-center items-center">
					<FaGoogle className="text-black-500 text-2xl m-2 " />
					<FaTwitter className="text-black-500 text-2xl m-2 " />
					<FaFacebook className="text-black-500 text-2xl m-2" />
					<FaReddit className="text-black-500 text-2xl m-2" />
                </div>
                <input
          type="text"
          placeholder="Username"
          className="border-2 border-gray-300 p-2 m-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border-2 border-gray-300 p-2 m-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-500 text-white p-2 m-2" onClick={handleLogin}>
          Login
        </button>
				<p className="text-gray-600">Don't have an account? <a href="/signup" className="text-blue-500">Sign up</a></p>
            </div>
        </div>
  );
}

export default Login;

