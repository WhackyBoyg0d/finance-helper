import React from 'react'
import {useNavigate} from 'react-router-dom';


const Header :React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header className="w-full p-8 bg-white shadow-lg flex justify-between items-center">
                <p className="text-2xl font-bold">FINWISE</p>
                <button onClick={() => navigate("/login")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg text-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
                    Log In
                </button>
            </header>
    </div>
  )
}

export default Header


