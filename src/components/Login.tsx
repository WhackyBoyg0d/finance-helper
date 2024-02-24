import React from 'react';
import finwise from '../assets/finwise.png';
import { FaGoogle } from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {FaReddit} from "react-icons/fa";

const Login: React.FC = () => {
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
                <input type="text" placeholder="Username" className="border-2 border-gray-300 p-2 m-2 w-full" />
                <input type="password" placeholder="Password" className="border-2 border-gray-300 p-2 m-2 w-full" />
                <button className="bg-blue-500 text-white p-2 m-2 w-full">Login</button>
				<p className="text-gray-600">Don't have an account? <a href="/signup" className="text-blue-500">Sign up</a></p>
            </div>
        </div>
    );
}

export default Login;
