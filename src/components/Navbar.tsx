import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import finwise from '../assets/finwise.png'; // Import the image
import pfp from '../assets/pfp.png';

const Navbar: React.FC = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);


  return (
    <div>
      <header className="w-full p-8 bg-white shadow-lg flex justify-between items-center">
        <p className="text-2xl font-bold">FINWISE</p>
        <div className="flex items-center">
          {/* Assuming Avatar is a component you created or an image. Adjust as necessary. */}
          
          <button onClick={() => navigate("/courses")} className="text-xl font-bold mx-2 hover:text-blue-500">Courses</button>
          <button onClick={() => navigate("/budget")} className="text-xl font-bold mx-2 hover:text-blue-500">Budget</button>
          <button onClick={() => navigate("/onboarding")} className="text-xl font-bold mx-2 hover:text-blue-500">Onboarding</button>
          <img src={pfp} width="50px" className="rounded-full border-b-2 border-black inline-flex ml-5" alt="user" onClick={toggleDropdown}/>
          {dropdownOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu" onClick={toggleDropdown}>
            <p className="px-4 py-2 text-sm text-gray-700" role="menuitem">Username:  {localStorage.getItem("username")}</p>
            <p className="px-4 py-2 text-sm text-gray-700" role="menuitem">Profile Name: John Smith</p>
          </div>
        </div>
      )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
