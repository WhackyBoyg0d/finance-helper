import React, { useEffect, useState } from 'react';
import { auth, database } from '../firebase';
import { ref, get } from 'firebase/database';
import Navbar from './Navbar';
import { useCountUp } from 'use-count-up';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { UserData } from '../userInterface';
import pfp from '../assets/pfp.png';

const Profile: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const { value: value1 } = useCountUp({
    isCounting: true,
    duration: 2.5,
    start: 0,
    end: 75,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userRef = ref(database, `users/${user.uid}`);
          const userDataSnapshot = await get(userRef);
          const fetchedUserData: UserData | null = userDataSnapshot.val();
          setUserData(fetchedUserData);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="justify-items-start pl-24 my-6 grid grid-cols-2 gap-8">
        <div className="justify-center">
          <h2 className="border-b-2 border-r-2 border-black inline-flex mb-4 pr-2">Your Courses</h2>
        </div>

        <div className="flex-end flex justify-end">
          <div className="mx-16 my-6 gap-8 grid grid-rows-2 w-1/2">
            <div className="border-2 bg-slate-50 rounded-md border-black p-4 justify-center">
              {/*goal*/}
              <CircularProgressbar value={value1 as number} text={`${value1}%`} />
            </div>
            <div className="border-2 bg-slate-50 rounded-md border-black p-4">
              {/*savings*/}
              Savings
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
