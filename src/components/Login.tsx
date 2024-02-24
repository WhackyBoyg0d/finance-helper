import React, { useState } from "react";
import response from "data/users.json";
import { useNavigate } from "react-router-dom";

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
    <div className="flex justify-center align-middle ">
      <div className="flex flex-col">
        <div className="flex justify-center align-middle">
          <button className=" text-white p-2 m-2"></button>
          <button className=" text-white p-2 m-2">Twitter</button>
          <button className=" text-white p-2 m-2">Facebook</button>
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
      </div>
    </div>
  );
}

export default Login;

