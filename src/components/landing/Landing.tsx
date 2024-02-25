import finwise from 'assets/finwise.png';
import Header from '../common/Header';
import Footer from '../common/Footer';
import React from 'react';

const LandingPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-primary flex flex-col">
            <Header />
            <main className="flex flex-1 flex-col justify-center items-center text-center p-8">
            <img src={finwise} alt="Company Logo" className="h-16 md:h-40" /> 
                <h1 className="text-5xl md:text-6xl font-extrabold text-pearl mb-6 mt-3">
                    Welcome to Finwise
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
                    Our service provides you with an exceptional experience, offering top-notch solutions for your needs. Explore what we have to offer and how we can help you achieve your goals.
                </p>
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;
