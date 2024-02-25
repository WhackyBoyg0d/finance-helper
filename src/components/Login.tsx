import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth';
import finwise from '../assets/finwise.png';
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { auth, database } from "../firebase";
import { FaFacebook } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { get, ref } from 'firebase/database';
import { User } from '../user'; 

export function Login(): JSX.Element {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
    const userCredential = await signInWithEmailAndPassword(auth, username, password);
    const user = userCredential.user;
    // Fetch additional user data from the database using the user's UID
    const userRef = ref(database, `users/${user.uid}`);
    const userDataSnapshot = await get(userRef);
    const userData: User | null = userDataSnapshot.val();

    if (userData) {
      console.log('User Data:', userData);
    } else {
      console.log('User Data not found.');
    }

      // Redirect to the home page
      navigate('/Profile');

    } catch (error) {
      console.error('Error logging in:');
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
        <button
          className="bg-blue-500 text-white p-2 m-2"
          onClick={handleLogin}
        >
          Login
        </button>
        <p className="text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;


