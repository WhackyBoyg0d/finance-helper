import finwise from 'assets/finwise.png';
import Header from '../common/Header';
import Footer from '../common/Footer';
import React from 'react';

const LandingPage: React.FC = () => {
    return (
        <div className="min-h-screen  flex flex-col bg-gradient-to-b from-slate-50 via-gray-50 to-emerald-200">
            <Header />
            <main className="flex flex-1 flex-col justify-center items-center text-center p-8 m-16">
                <div className='flex flex-row justify-center items-center gap-8'>

                    <div>

                        <img src={finwise} alt="Company Logo" className="h-[350px]" /> 
                        {/* <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-6 mt-3">
                            Finwise
                        </h1> */}
                        <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
                        The future of <span className='text-emerald-600 font-bold'>
                            finance education
                            </span>
                        </p>
                    </div>
            </div>
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;
