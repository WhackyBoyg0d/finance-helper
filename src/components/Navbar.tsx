import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import finwise from '../assets/finwise.png'; // Import the image

const Navbar: React.FC = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div>
      <header className="w-full p-8 bg-white shadow-lg flex justify-between items-center">
        <p className="text-2xl font-bold">FINWISE</p>
        <div className="flex items-center">
          {/* Assuming Avatar is a component you created or an image. Adjust as necessary. */}
          <img src={finwise} alt="Profile" className="rounded-full" />
          <a href="#" onClick={() => navigate("/courses")} className="text-xl font-bold mx-2 hover:text-blue-500">Courses</a>
          <a href="#" onClick={() => navigate("/budget")} className="text-xl font-bold mx-2 hover:text-blue-500">Budget</a>
          <a href="#" onClick={() => navigate("/onboarding")} className="text-xl font-bold mx-2 hover:text-blue-500">Onboarding</a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
