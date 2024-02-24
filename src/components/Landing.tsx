import finwise from '../assets/finwise.png';
import {useNavigate} from 'react-router-dom';
import React from 'react';



const LandingPage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-primary flex flex-col">
            <header className="w-full p-8 bg-white shadow-lg flex justify-between items-center">
                <p className="text-2xl font-bold">FINWISE</p>
                <button onClick={() => navigate("/login")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg text-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
                    Log In
                </button>
            </header>
            <main className="flex flex-1 flex-col justify-center items-center text-center p-8">
            <img src={finwise} alt="Company Logo" className="h-16 md:h-40" /> 
                <h1 className="text-5xl md:text-6xl font-extrabold text-pearl mb-6 mt-3">
                    Welcome to Finwise
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
                    Our service provides you with an exceptional experience, offering top-notch solutions for your needs. Explore what we have to offer and how we can help you achieve your goals.
                </p>
            </main>
            <footer className="w-full p-8 bg-white shadow-lg text-center">
                © 2024 Company Name. All rights reserved.
            </footer>
        </div>
    );
};

export default LandingPage;
