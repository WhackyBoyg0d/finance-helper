import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, Auth, User } from 'firebase/auth';
import { auth, database} from '../firebase'; // Import the necessary Firebase modules
import finwise from '../assets/finwise.png';
import pfp from '../assets/pfp.png';
import { get, ref } from 'firebase/database';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);

      if (user) {
        // Fetch the username from the Realtime Database
        const userRef = ref(database, `users/${user.uid}/username`);

        get(userRef)
          .then((snapshot: { val: () => string | null; }) => {
            const fetchedUsername: string | null = snapshot.val();
            setUsername(fetchedUsername);
          })
          .catch((error: any) => {
            console.error('Error fetching username:', error);
          });
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <header className="w-full p-8 bg-white shadow-lg flex justify-between items-center">
        <p className="text-2xl font-bold">FINWISE</p>
        <div className="flex items-center">
          <button onClick={() => navigate("/courses")} className="text-xl font-bold mx-2 hover:text-blue-500">Courses</button>
          <button onClick={() => navigate("/budget")} className="text-xl font-bold mx-2 hover:text-blue-500">Budget</button>
          <button onClick={() => navigate("/onboarding")} className="text-xl font-bold mx-2 hover:text-blue-500">Onboarding</button>
          {user ? (
            <>
              <img src={pfp} width="50px" className="rounded-full border-b-2 border-black inline-flex ml-5" alt="user" onClick={toggleDropdown} />
              {dropdownOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu" onClick={toggleDropdown}>
                    <p className="px-4 py-2 text-sm text-gray-700" role="menuitem">Username: {username || 'Loading...'}</p>
                    <p className="px-4 py-2 text-sm text-gray-700" role="menuitem">Email: {user.email}</p>
                  </div>
                </div>
              )}
            </>
          ) : (
            <button onClick={() => navigate("/login")} className="text-xl font-bold mx-2 hover:text-blue-500">Login</button>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;

