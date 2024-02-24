// src/components/SignIn.tsx
import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential: { user: any; }) => {
        // Signed in
        const user = userCredential.user
        console.log(user)
        window.alert('successfully registered')
        window.location.replace('http://localhost:3000/Login')
      })
      .catch((error: { message: any; }) => {
        const errorMessage = error.message
        window.alert(errorMessage)
        // ..
      })
  }


  return (
    <div>
      <h2>Sign In</h2>
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
      <button onClick={onSubmit}>Sign In</button>
    </div>
  );
};

export default SignIn;
