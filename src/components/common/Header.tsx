import React from 'react'
import {useNavigate, Link} from 'react-router-dom';


const Header :React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header className="w-full p-8 bg-white shadow-lg flex justify-between items-center">
                <Link to="/"><p className="text-2xl font-bold">FINWISE</p></Link>
                <button onClick={() => navigate("/login")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg text-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
                    Log In
                </button>
            </header>
    </div>
  )
}

export default Header


