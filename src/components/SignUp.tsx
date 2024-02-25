// src/components/SignUp.tsx
import React, { useState } from 'react';
import { auth, database } from "../firebase";
import { ref, set } from 'firebase/database';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { User } from '../user'; 
import { useNavigate } from 'react-router-dom';
import finwise from '../assets/finwise.png';
// import { FaGoogle } from "react-icons/fa";
// import {FaTwitter} from "react-icons/fa";
// import {FaFacebook} from "react-icons/fa";
// import {FaReddit} from "react-icons/fa";

const SignUp: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Signed in
      const user = userCredential.user;
      console.log(user);

      const userRef = ref(database, `users/${user.uid}`);
      const userData: User = new User(username, email);

      set(userRef, userData);
      window.alert('Successfully registered');
      
      // Use the navigate function to redirect to the login page
      navigate('/Profile');
    } catch (error) {
      const errorMessage = error;
      window.alert(errorMessage);
      // Handle error appropriately
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-primary">
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
                <img src={finwise} alt="Logo" className="mb-4 w-20 h-20" /> 
				<p className="text-gray-600 font-extrabold">Sign Up</p>
                <div className="flex justify-center items-center">
					{/* <FaGoogle className="text-black-500 text-2xl m-2 " />
					<FaTwitter className="text-black-500 text-2xl m-2 " />
					<FaFacebook className="text-black-500 text-2xl m-2" />
					<FaReddit className="text-black-500 text-2xl m-2" /> */}
                </div>
                <form onSubmit={onSubmit}>
                <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          className="border-2 border-gray-300 p-2 m-2 w-full" 
          />
          <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="border-2 border-gray-300 p-2 m-2 w-full" 
          />
          <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="border-2 border-gray-300 p-2 m-2 w-full" 
        />
        <button type="submit" className="bg-blue-500 text-white p-2 m-2 w-full">Sign Up</button>

                </form>
            </div>
        </div>
    </div>
  );
};

export default SignUp;

