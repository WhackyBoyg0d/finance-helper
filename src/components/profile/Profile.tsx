import React, { useEffect, useState } from "react";
import { auth, database } from "../../firebase";
import { ref, get } from "firebase/database";
import Navbar from "../common/Navbar";
import { useCountUp } from "use-count-up";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { User } from "../common/user";
import pfp from "../assets/pfp.png";
import Index from "../courses";
import { FaFire } from "react-icons/fa";
import { User as AuthUser } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import coursesJson from "data/courses.json";

const Profile: React.FC = () => {
  const navigate = useNavigate();

	const authUser: AuthUser | null = auth.currentUser;
  const courses: Array<Course> = coursesJson;
  
  let [percentageComplete, setPercentageComplete] = useState(0.0);

	const [userData, setUserData] = useState<User | null>(null);
	const { value: value1 } = useCountUp({
		isCounting: true,
		duration: 2.5,
		start: 0,
		end: percentageComplete,
	});

	useEffect(() => {
		if(authUser) (async () => {
			const userRef = ref(database, `users/${authUser.uid}`);
			const userDataSnapshot = await get(userRef);
	
			const user: User = userDataSnapshot.val();

      let totalCourseQs = 0;
			for(const course of courses) {
        for(const question of course.questions) {
          totalCourseQs++;
        }
      }

      if(user.courseCompletions) {
        let totalUserQs = 0;
        for(const course of user.courseCompletions) {
          for(const question of course.questionsCorrect) {
            totalUserQs++;
          }
        }

        setPercentageComplete(Math.floor(totalUserQs/ totalCourseQs * 100));
      } else {
        setPercentageComplete(0);
      }
		})();
		else {
			navigate("/profile")
		}
	}, [])

	return (
		<>
			<Navbar />

			<div className=" pl-24 my-6 grid grid-cols-2 gap-8">
				<div className="justify-center">
					<h2 className="border-b-2 border-r-2 border-black inline-flex mb-4 pr-2">
						Your Courses
					</h2>
					<Index />
				</div>

				<div className="flex-end flex justify-center ">
					<div className="mx-16 my-6 gap-8 grid grid-rows-2 ">
						<div className="border-2 bg-slate-50 rounded-md border-black p-4 flex items-center justify-center flex-col">
							{/*goal*/}
							<CircularProgressbar
								value={value1 as number}
								text={`${value1}%`}
								className="mb-4"
							/>
							<p>
								Your{" "}
								<span className="text-emerald-600 font-bold">
									Learning Progress
								</span>
							</p>
						</div>
						{(userData?.courseCompletions?.length ?? 0) > 0 ? (
							<div className="border-2 bg-slate-50 rounded-md border-black p-4 flex items-center justify-center flex-col">
								<FaFire color="DarkRed" className="mb-4" size={150} />
								<p>
									Daily Streaks:{" "}
									<span className="text-emerald-600 font-bold">
										{userData?.courseCompletions?.length}
									</span>
								</p>
							</div>
						) : (
							<div className="border-2 bg-slate-50 rounded-md border-black p-4 flex items-center justify-center flex-col">
								<FaFire size={150} className="mb-4" />
								<p>
									No current Streak, why not{" "}
									<span className="text-emerald-600 font-bold">start one?</span>
								</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
