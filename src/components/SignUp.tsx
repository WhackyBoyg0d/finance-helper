// src/components/SignUp.tsx
import React, { useState } from 'react';
import { auth, database } from "../firebase";
import { ref, set } from 'firebase/database';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { UserData } from '../userInterface'; 
import { useNavigate } from 'react-router-dom';

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
      const userData: UserData = {
        username,
        email: user.email || '',
        // other user properties...
      };

      set(userRef, userData);
      window.alert('Successfully registered');
      
      // Use the navigate function to redirect to the login page
      navigate('/login');
    } catch (error) {
      const errorMessage = error;
      window.alert(errorMessage);
      // Handle error appropriately
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={onSubmit}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;

